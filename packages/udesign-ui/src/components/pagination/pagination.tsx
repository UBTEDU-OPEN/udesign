import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { LeftOutlined, RightOutlined } from '@ubt/udesign-icons';
import { NativeProps, usePropsValue } from '../../utils';
import { numbers, prefixCls } from './constants';
import { Locale } from '../locale/interface';
import LocaleConsumer from '../locale/consumer';
import Input from '../input';

const _getTotalPageNumber = (total: number, pageSize: number) => Math.ceil(total / pageSize);

export type PaginationLocale = Locale['Pagination'];
export type PageRenderText = number | '•••';
export type PageList = PageRenderText[];

export type PaginationProps = {
  currentPage?: number; //	当前页码。默认值：-
  defaultCurrentPage?: number; //	默认的当前页码。默认值：1
  hideOnSinglePage?: boolean; // 只有一页时是否隐藏分页器。默认值：true
  pageSize?: number; //	每页条数。默认值：-
  defaultPageSize?: number; // 默认的每页条数。默认值：10
  pageSizeOptions?: number[]; // 指定每页可以显示多少条。默认值：[10, 20, 50, 100]
  disabled?: boolean; // 禁用分页。默认值：false
  prevText?: string | ReactNode; //	上一页文本。默认值：-
  nextText?: string | ReactNode; //	下一页文本。默认值：-
  showTotal?: boolean; //	是否显示总页数。默认值：false
  showQuickJumper?: boolean; //	是否可以快速跳转至某页。默认值：false
  showSizeChanger?: boolean; //	是否展示 pageSize 切换器，当 total 大于 50 时默认为true。
  total?: number; // 总条数。默认值：0
  onChange?: (currentPage: number, pageSize: number) => void; // 页码、每页容量变化时的回调函数。默认值：-
  onPageChange?: (currentPage: number) => void; // 页码变化的回调函数。默认值：-
  onPageSizeChange?: (pageSize: number) => void; // 每页容量变化时的回调函数。默认值：-
} & NativeProps;

export const Pagination = (props: PaginationProps) => {
  const { total = 0, pageSizeOptions = [10, 20, 40, 100] } = props;

  const [quickJumpPage, setQuickJumpPage] = useState<string>('');

  const [currentPage, setCurrentPage] = usePropsValue({
    value: props.currentPage,
    defaultValue: props.defaultCurrentPage ?? 1,
    onChange: props.onPageChange,
  });

  const [pageSize, setPageSize] = usePropsValue({
    value: props.pageSize,
    defaultValue: props.defaultPageSize || pageSizeOptions[0] || 10,
    onChange: props.onPageSizeChange,
  });

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const [pageList, setPageList] = useState<PageRenderText[]>([]);

  useEffect(() => {
    _updateDisabled({ currentPage, total, pageSize });
    _updatePageList({ currentPage, total, pageSize });
  }, [props.currentPage, props.total, props.pageSize]);

  // 关键函数：切换页码
  function goPage(targetPageIndex: PageRenderText) {
    if (targetPageIndex === '•••') {
      return;
    }

    if (targetPageIndex === currentPage) {
      return;
    }

    setCurrentPage(targetPageIndex);
    _updateDisabled({ currentPage: targetPageIndex, total, pageSize });
    _updatePageList({ currentPage: targetPageIndex, total, pageSize });
  }

  // 切换页码时，更新 disabled UI
  function _updateDisabled(pageInfo: { currentPage: number; total: number; pageSize: number }) {
    const { currentPage, total, pageSize } = pageInfo;
    const totalPageNum = _getTotalPageNumber(total, pageSize);
    if (currentPage === 1) {
      setPrevDisabled(true);
      setNextDisabled(totalPageNum < 2);
    } else if (currentPage === totalPageNum) {
      setPrevDisabled(false);
      setNextDisabled(true);
    } else {
      setPrevDisabled(false);
      setNextDisabled(false);
    }
  }

  // 核心函数：每次切换页码时，更新UI
  function _updatePageList(pageListInfo: { currentPage: number; total: number; pageSize: number }) {
    const { currentPage, total, pageSize } = pageListInfo;
    let pageList: PageList = [];
    /**
        分页器截断逻辑（t为总页数，c为当前页）：
        - t<=7 页的时候不需要截断
        - 当 t>7 时
            - 当 c<4 时，第4个为截断符号（•••）
            - 当 c=4 时，第6个为截断符号（•••）
            - 当 4<c<t-3 时，第2个与第6个为截断符号（•••）
            - 当 t-3<=c<=t 时，第 2 个为截断符号（•••），后面为倒数第5个-倒数第1个
        截断符+数字 总共个数为7个
    */
    const totalPageNum = _getTotalPageNumber(total, pageSize);
    const { PAGE_SHOW_MAX, REST_PAGE_MAX_SIZE } = numbers;
    if (totalPageNum <= PAGE_SHOW_MAX) {
      pageList = Array.from({ length: totalPageNum }, (v, i) => i + 1);
    } else {
      switch (true) {
        case currentPage < 4:
          pageList = [1, 2, 3, 4, '•••', totalPageNum - 1, totalPageNum];
          break;
        case currentPage === 4:
          pageList = [1, 2, 3, 4, 5, '•••', totalPageNum];
          break;
        case currentPage > 4 && currentPage < totalPageNum - 3:
          // eslint-disable-next-line
          const middle = Array.from({ length: 3 }, (v, i) => currentPage + (i - 1));
          pageList = ([1] as PageList).concat('•••', middle, '•••', totalPageNum);
          break;
        case currentPage - 3 <= currentPage && currentPage <= totalPageNum:
          // eslint-disable-next-line
          const right = Array.from({ length: 5 }, (v, i) => totalPageNum - (4 - i));
          pageList = [1, '•••' as const].concat(right);
          break;
        default:
          break;
      }
    }
    setPageList(pageList);
  }

  // 上一页
  const goPrev = () => {
    if (currentPage > 1) {
      goPage(currentPage - 1);
    }
  };

  // 下一页
  const goNext = () => {
    const totalPageNum = _getTotalPageNumber(total, pageSize);
    if (currentPage < totalPageNum) {
      goPage(currentPage + 1);
    }
  };

  function renderPrevBtn() {
    const { prevText } = props;
    const cls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: prevDisabled,
      [`${prefixCls}-item-prev`]: prevText,
    });
    return (
      <li onClick={() => !prevDisabled && goPrev()} className={cls} tab-index={0}>
        {prevText || <LeftOutlined />}
      </li>
    );
  }

  function renderNextBtn() {
    const { nextText } = props;
    const cls = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: nextDisabled,
      [`${prefixCls}-item-next`]: nextText,
    });
    return (
      <li onClick={() => !nextDisabled && goNext()} className={cls} tab-index={0}>
        {nextText || <RightOutlined />}
      </li>
    );
  }

  function renderPageSizeSwitch() {
    // // rtl modify the default position
    // const { direction } = this.context;
    // const defaultPopoverPosition = direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
    // const { showSizeChanger, popoverPosition = defaultPopoverPosition } = this.props;
    // const { pageSize } = this.state;
    // const switchCls = classNames(`${prefixCls}-switch`);
    // if (!showSizeChanger) {
    //   return null;
    // }
    // const pageSizeText = locale.pageSize;
    // const newPageSizeOpts = pageSizeInOpts();
    // const options = newPageSizeOpts.map((size: number) => (
    //   <Option value={size} key={size}>
    //     <span>
    //       {`${size} `}
    //       {pageSizeText}
    //     </span>
    //   </Option>
    // ));
    // return (
    //   <div className={switchCls}>
    //     <Select onChange={(newPageSize) => changePageSize(newPageSize)} value={pageSize} key={pageSizeText} position={popoverPosition || 'bottomRight'} clickToHide dropdownClassName={`${prefixCls}-select-dropdown`}>
    //       {options}
    //     </Select>
    //   </div>
    // );
  }

  function renderQuickJump() {
    const { showQuickJumper } = props;
    if (!showQuickJumper) {
      return null;
    }
    const totalPageNum = _getTotalPageNumber(total, pageSize);
    const isDisabled = totalPageNum === 1;
    const quickJumpCls = classNames({
      [`${prefixCls}-quickJump`]: true,
      [`${prefixCls}-quickJump-disabled`]: isDisabled,
    });

    function _handleQuickJump(quickJumpPage: string | number) {
      let page = Number(quickJumpPage);
      const totalPageNum = _getTotalPageNumber(total, pageSize);
      if (Number.isNaN(page)) {
        setQuickJumpPage('');
        return;
      }
      // If the user input is greater than totalPage
      if (page > totalPageNum) {
        page = totalPageNum;
      }
      if (page <= 0) {
        page = 1;
      }
      // clear
      setQuickJumpPage('');
      goPage(page);
    }

    const handleQuickJumpBlur = () => {
      // no need to operate when inputnumber blur & quickJumpPage is empty
      if ((typeof quickJumpPage === 'string' && quickJumpPage) || typeof quickJumpPage === 'number') {
        _handleQuickJump(quickJumpPage);
      }
    };

    const handleQuickJumpEnterPress = (v: string) => {
      _handleQuickJump(v);
    };
    const handleQuickJumpNumberChange = (v: string) => {
      setQuickJumpPage(v);
    };

    return (
      <div className={quickJumpCls}>
        <span>跳至</span>
        <div className={`${prefixCls}-quickJump-input`}>
          <Input
            shape='round'
            size='small'
            value={quickJumpPage}
            disabled={isDisabled}
            onBlur={() => handleQuickJumpBlur()}
            onEnterPress={(e: React.KeyboardEvent) => handleQuickJumpEnterPress((e.target as any).value)}
            onChange={(value) => handleQuickJumpNumberChange(value)}
          />
        </div>
        <span>页</span>
      </div>
    );
  }

  function renderPageList() {
    return pageList.map((page, i) => {
      const cls = classNames(`${prefixCls}-item`, {
        [`${prefixCls}-item-active`]: currentPage === page,
      });

      // 处理快速前进和后退
      let targetPage = page;
      if (page === '•••') {
        targetPage = i < 3 ? currentPage - 5 : currentPage + 5;
      }

      const pageEl = (
        <li key={`${page}${i}`} onClick={() => goPage(targetPage)} className={cls} tab-index={0}>
          {page}
        </li>
      );
      return pageEl;
    });
  }

  function renderDefaultPage(locale: PaginationLocale) {
    const { showTotal, className, style, hideOnSinglePage = true } = props;
    const totalPageNum = _getTotalPageNumber(total, pageSize);
    if (totalPageNum < 2 && hideOnSinglePage) {
      return null;
    }
    const cls = classNames(`${prefixCls}`, className);
    return (
      <ul className={cls} style={style}>
        {showTotal ? (
          <li className={`${prefixCls}-total`}>
            {locale.total}
            {` ${totalPageNum} `}
            {locale.page}
          </li>
        ) : null}
        {renderPrevBtn()}
        {renderPageList()}
        {renderNextBtn()}
        {renderPageSizeSwitch()}
        {renderQuickJump()}
      </ul>
    );
  }

  return (
    <>
      <LocaleConsumer componentName='Pagination'>{(locale: PaginationLocale) => renderDefaultPage(locale)}</LocaleConsumer>
    </>
  );
};
