import IDX from "../../nonview/base/IDX";

import IssuesPage from "../../view/pages/IssuesPage";
import PeoplePage from "../../view/pages/PeoplePage";
import VersionsPage from "../../view/pages/VersionsPage";

const PAGE_LIST = [VersionsPage, IssuesPage, PeoplePage];

const PAGE_CONFIG_LIST = PAGE_LIST.map(function (Page) {
  const pageInstance = new Page();

  return {
    Page,
    page: pageInstance.page,
    label: pageInstance.label,
    Icon: pageInstance.Icon,
    color: pageInstance.color,
  };
});

export default PAGE_CONFIG_LIST;

export const PAGE_CONFIG_IDX = IDX.build(
  PAGE_CONFIG_LIST,
  (x) => x.page,
  (x) => x
);

export const DEFAULT_PAGE_CONFIG = PAGE_CONFIG_IDX["IssuesPage"];
