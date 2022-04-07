import React, { ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Input } from '@ubt/udesign-ui-alpha';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { getDisabledCls, NativeProps, usePropsValue } from '../../utils';
import { numbers, prefixCls } from './constants';

const _getTotalPageNumber = (total: number, pageSize: number) => {
  return Math.ceil(total / pageSize);
};

export type PageRenderText = number | '•••';
export type PageList = PageRenderText[];

export type PaginationProps = {
  currentPage?: number; //	当前页码
  defaultCurrentPage?: number; //	默认的当前页码, 1
  hideOnSinglePage?: boolean; // 只有一页时是否隐藏分页器
  pageSize?: number; //	每页条数
  defaultPageSize?: number; // 默认的每页条数, 10
  pageSizeOptions?: number[]; // 指定每页可以显示多少条, [10, 20, 50, 100]
  disabled?: boolean; // 禁用分页
  prevText?: string | ReactNode; //	上一页文本
  nextText?: string | ReactNode; //	下一页文本
  showTotal?: boolean; //	是否显示总页数
  showQuickJumper?: boolean; //	是否可以快速跳转至某页
  showSizeChanger?: boolean; //	是否展示 pageSize 切换器，当 total 大于 50 时默认为 true
  total?: number; // 总条数
  onChange?: (currentPage: number, pageSize: number) => void; // 页码、每页容量变化时的回调函数
  onPageChange?: (currentPage: number) => void; // 页码变化的回调函数
  onPageSizeChange?: (pageSize: number) => void; // 每页容量变化时的回调函数
} & NativeProps;

export const Pagination = ({ total = 0, ...restProps }: PaginationProps) => {
  // const [total, setTotal] = useState(restProps.total);
  const [quickJumpPage, setQuickJumpPage] = useState<string>('');

  const [currentPage, setCurrentPage] = usePropsValue({
    value: restProps.currentPage,
    defaultValue: restProps.defaultCurrentPage ?? 1,
    onChange: restProps.onPageChange,
  });

  const [pageSize, setPageSize] = usePropsValue({
    value: restProps.pageSize,
    defaultValue: restProps.defaultPageSize ?? 10,
    onChange: restProps.onPageSizeChange,
  });

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const [pageList, setPageList] = useState<PageRenderText[]>([]);
  const [restLeftPageList, setRestLeftPageList] = useState<PageRenderText[]>([]);
  const [restRightPageList, setRestRightPageList] = useState<PageRenderText[]>([]);

  useEffect(() => {
    _updateDisabled(currentPage);
    _updatePageList(currentPage);
  }, []);

  // 关键函数：切换页码
  function goPage(targetPageIndex: PageRenderText) {
    if (targetPageIndex === '•••') {
      return;
    }
    // const { pageSize, currentPage } = this.getStates();
    // const isControlComponent = this._isInProps('currentPage');

    if (targetPageIndex === currentPage) {
      return;
    }

    // if (!isControlComponent) {
    //   this.updatePage(targetPageIndex);
    //   this._adapter.notifyPageChange(targetPageIndex);
    //   this._adapter.notifyChange(targetPageIndex, pageSize);
    // } else {
    //   this._adapter.notifyPageChange(targetPageIndex);
    //   this._adapter.notifyChange(targetPageIndex, pageSize);
    // }

    setCurrentPage(targetPageIndex);
    _updateDisabled(targetPageIndex);
    _updatePageList(targetPageIndex);
  }

  // 切换页码时，更新 disabled UI
  function _updateDisabled(targetPageIndex: PageRenderText) {
    const totalPageNum = _getTotalPageNumber(total, pageSize);
    if (targetPageIndex === 1) {
      setPrevDisabled(true);
      setNextDisabled(totalPageNum < 2);
    } else if (targetPageIndex === totalPageNum) {
      setPrevDisabled(false);
      setNextDisabled(true);
    } else {
      setPrevDisabled(false);
      setNextDisabled(false);
    }
  }

  // 核心函数：每次切换页码时，更新UI
  function _updatePageList(targetPageIndex: number) {
    // const { currentPage, total, pageSize } = pageListInfo;
    let pageList: PageList = [];
    let restLeftPageList: number[] = []; // pages before •••
    let restRightPageList: number[] = []; // pages after •••
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
      restLeftPageList = [];
      restRightPageList = [];
    } else {
      switch (true) {
        case targetPageIndex < 4:
          pageList = [1, 2, 3, 4, '•••', totalPageNum - 1, totalPageNum];
          // length: (totalPageNum - 1) - 4
          restRightPageList = Array.from({ length: Math.min(totalPageNum - 6, REST_PAGE_MAX_SIZE) }, (v, i) => i + 5);
          restLeftPageList = [];
          break;
        case targetPageIndex === 4:
          pageList = [1, 2, 3, 4, 5, '•••', totalPageNum];
          restRightPageList = Array.from({ length: Math.min(totalPageNum - 6, REST_PAGE_MAX_SIZE) }, (v, i) => i + 6);
          restLeftPageList = [];
          break;
        case 4 < targetPageIndex && targetPageIndex < totalPageNum - 3:
          const middle = Array.from({ length: 3 }, (v, i) => targetPageIndex + (i - 1));
          pageList = ([1] as PageList).concat('•••', middle, '•••', totalPageNum);
          // length: total-(targetPageIndex+1)-1
          restRightPageList = Array.from({ length: Math.min(totalPageNum - targetPageIndex - 2, REST_PAGE_MAX_SIZE) }, (v, i) => targetPageIndex + i + 2);
          restLeftPageList = Array.from({ length: Math.min(targetPageIndex - 3, REST_PAGE_MAX_SIZE) }, (v, i) => i + 2);
          break;
        case targetPageIndex - 3 <= targetPageIndex && targetPageIndex <= totalPageNum:
          const right = Array.from({ length: 5 }, (v, i) => totalPageNum - (4 - i));
          pageList = [1, '•••' as const].concat(right);
          restRightPageList = [];
          restLeftPageList = Array.from({ length: Math.min(right[0] - 2, REST_PAGE_MAX_SIZE) }, (v, i) => i + 2);
          break;
        default:
          break;
      }
    }
    setPageList(pageList);
    setRestLeftPageList(restLeftPageList);
    setRestRightPageList(restRightPageList);
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

  const itemCls = 'w-10 h-10 mx-1 flex items-center justify-center rounded-full';
  const hoverItemCls = 'hover:bg-gray-200 cursor-pointer';

  function renderPrevBtn() {
    const { prevText } = restProps;
    const cls = classNames(itemCls, getDisabledCls(prevDisabled, hoverItemCls));
    return (
      <li onClick={() => !prevDisabled && goPrev()} className={cls} tab-index={0}>
        {prevText || <LeftOutlined />}
      </li>
    );
  }

  function renderNextBtn() {
    const { nextText } = restProps;
    const cls = classNames(itemCls, getDisabledCls(nextDisabled, hoverItemCls));
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
    const { showQuickJumper } = restProps;
    if (!showQuickJumper) {
      return null;
    }
    const totalPageNum = _getTotalPageNumber(total, pageSize);
    const isDisabled = totalPageNum === 1;
    const quickJumpCls = classNames('flex flex-shrink-0 items-center', getDisabledCls(isDisabled), {
      [`${prefixCls}-quickjump`]: true,
    });

    function _handleQuickJump(quickJumpPage: string | number) {
      let page = Number(quickJumpPage);
      // const { pageSize, total } = this.getStates();
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
        <div className='w-14 mx-1'>
          <Input
            value={quickJumpPage}
            disabled={isDisabled}
            onBlur={(e: React.FocusEvent) => handleQuickJumpBlur()}
            onEnterPress={(e: React.KeyboardEvent) => handleQuickJumpEnterPress((e.target as any).value)}
            onChange={(value) => handleQuickJumpNumberChange(value)}
          />
        </div>
        <span>页</span>
      </div>
    );
  }

  function renderPageList() {
    // const { pageList, currentPage, restLeftPageList, restRightPageList } = this.state;
    // const { popoverPosition, popoverZIndex } = this.props;
    return pageList.map((page, i) => {
      const cls = classNames(`${prefixCls}-item`, itemCls, currentPage === page ? 'bg-indigo-500 text-white cursor-pointer' : hoverItemCls, {
        // 'bg-indigo-500 text-white': currentPage === page,
        // [`${prefixCls}-item-rest-opening`]: (i < 3 && isLeftRestHover && page ==='•••') || (i > 3 && isRightRestHover && page === '•••')
      });
      const pageEl = (
        <li key={`${page}${i}`} onClick={() => goPage(page)} className={cls} tab-index={0}>
          {page}
        </li>
      );
      // if (page === '•••') {
      //   let content;
      //   i < 3 ? (content = restLeftPageList) : (content = restRightPageList);
      //   return (
      //     <Popover
      //       trigger='hover'
      //       // onVisibleChange={visible=>this.handleRestHover(visible, i < 3 ? 'left' : 'right')}
      //       content={this.renderRestPageList(content)}
      //       key={`${page}${i}`}
      //       position={popoverPosition}
      //       zIndex={popoverZIndex}
      //     >
      //       {pageEl}
      //     </Popover>
      //   );
      // }
      return pageEl;
    });
  }

  function renderRestPageList(restList: PageRenderText[]) {
    // The number of pages may be tens of thousands, here is virtualized with the help of react-window
    // const { direction } = this.context;
    const className = classNames(`${prefixCls}-rest-item`);
    const count = restList.length;
    const row = (item: { index: number; style: React.CSSProperties }) => {
      const { index, style } = item;
      const page = restList[index];
      return (
        <div key={`${page}${index}`} className={className} onClick={() => goPage(page)} style={style}>
          {page}
        </div>
      );
    };
    const itemHeight = 32;
    const listHeight = count >= 5 ? itemHeight * 5 : itemHeight * count;
    return (
      // <List className={`${prefixCls}-rest-list`} itemData={restList} itemSize={itemHeight} width={78} itemCount={count} height={listHeight} style={{ direction }}>
      { row }
      // </List>
    );
  }

  function renderDefaultPage() {
    const { showTotal, className, style, hideOnSinglePage = true } = restProps;
    const totalPageNum = _getTotalPageNumber(total, pageSize);
    if (totalPageNum < 2 && hideOnSinglePage) {
      return null;
    }
    const cls = classNames('inline-flex items-center', className, `${prefixCls}`);
    return (
      <ul className={cls} style={style}>
        {showTotal ? <li className='mr-1'>共{` ${totalPageNum} `}页</li> : null}
        {renderPrevBtn()}
        {renderPageList()}
        {renderNextBtn()}
        {renderPageSizeSwitch()}
        {renderQuickJump()}
      </ul>
    );
  }

  return <>{renderDefaultPage()}</>;
};
