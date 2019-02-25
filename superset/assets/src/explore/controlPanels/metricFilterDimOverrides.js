export default {
  default: null,
  mapStateToProps: state => ({
    columns: (state.datasource) ?
      state.datasource.columns.filter(o => !o.column_name.startsWith('dim')) :
      null,
    savedMetrics: state.datasource ? state.datasource.metrics : [],
    datasourceType: state.datasource && state.datasource.type,
  }),
};
