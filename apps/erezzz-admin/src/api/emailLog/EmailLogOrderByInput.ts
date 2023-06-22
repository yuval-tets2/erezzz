import { SortOrder } from "../../util/SortOrder";

export type EmailLogOrderByInput = {
  id?: SortOrder;
  speakerName?: SortOrder;
  title?: SortOrder;
  subject?: SortOrder;
  recipient?: SortOrder;
  status?: SortOrder;
  date?: SortOrder;
};
