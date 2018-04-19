export default (state=null, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'PROFILE_CREATE':
    return {...state, ...payload};
  case 'PROFILE_UPDATE':
    return {...state, ...payload};
  case 'LOGOUT': 
    return null;

  case 'COMPANY_CREATE': {
    const updatedCompanies = [...state.companies, payload];
    return Object.assign({}, state, { companies: updatedCompanies });
  }
  // case 'COMPANY_UPDATE':
  //   return state.map(item => item._id === payload._id ? payload: item);
  // case 'COMPANY_DELETE':
  //   return state.filter(item => item._id !== payload._id);

  case 'JOB_CREATE': {
    const updatedCompanies = state.companies.map(company => {
      if (company._id === payload.companyId) {
        const updatedCompany = Object.assign({}, company);
        const updatedJobs = [...company.jobPosting, payload];
        updatedCompany.jobPosting = updatedJobs;

        return updatedCompany;
      }
      return company;
    });

    return Object.assign({}, state, { companies: updatedCompanies });
  }
  default:
    return state;
  }
};