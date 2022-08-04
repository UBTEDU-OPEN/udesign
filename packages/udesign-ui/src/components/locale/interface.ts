export interface Locale extends Record<string, any> {
  code: string;
  Pagination: {
    item: string;
    page: string;
    pageSize: string;
    total: string;
    jumpTo: string;
  };
  Modal: {
    confirm: string;
    cancel: string;
  };
  Empty: {
    description: string;
  };
}
