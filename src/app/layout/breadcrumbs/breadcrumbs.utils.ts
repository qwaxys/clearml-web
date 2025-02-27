import {selectSelectedTableModel} from '@common/models/reducers';
import {createSelector} from '@ngrx/store';
import {selectSelectedExperiment} from '~/features/experiments/reducers';
import {selectRootProjects, selectSelectedProject} from '@common/core/reducers/projects.reducer';
export {formatStaticCrumb} from '@common/layout/breadcrumbs/breadcrumbs-common.utils';
import {IBreadcrumbs} from '@common/layout/breadcrumbs/breadcrumbs-common.utils';
export {prepareNames, IBreadcrumbs} from '@common/layout/breadcrumbs/breadcrumbs-common.utils';


export const selectBreadcrumbsStringsBase = createSelector(
  selectSelectedProject, selectSelectedExperiment, selectSelectedTableModel, selectRootProjects,
  (project, experiment, model, projects) =>
    ({project, experiment, model, projects}) as IBreadcrumbs);
