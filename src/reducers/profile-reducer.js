export default (state=null, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'PROFILE_CREATE':
    return {...state, ...payload};
  case 'PROFILE_UPDATE':
    return {...state, ...payload};
  case 'LOGOUT': 
    return null;

  // COMPANY REDUCERS
  case 'COMPANY_CREATE': {
    const updatedCompanies = [...state.companies, payload];
    return Object.assign({}, state, { companies: updatedCompanies });
  }
  case 'COMPANY_UPDATE': {
    const updatedCompanies = state.companies.map(company => {
      if (company._id === payload._id) {
        return company = payload;
      }
      return company;
    });
    return Object.assign({}, state, { companies: updatedCompanies });
  }
  case 'COMPANY_DELETE': {
    const updatedCompanies = state.companies.filter(company => {
      return company._id !== payload._id;
    });
    return Object.assign({}, state, { companies: updatedCompanies });
  }

  // JOB REDUCERS
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
  case 'JOB_UPDATE': {
    const updatedCompanies = state.companies.map(company => {
      if (company._id === payload.companyId) {
        const updatedCompany = Object.assign({}, company);
        const updatedJobs = company.jobPosting.map(job => {
          if (job._id === payload._id) {
            return job = payload;
          }
          return job;
        });
        updatedCompany.jobPosting = updatedJobs;
        return updatedCompany;
      }
      return company;
    });
    return Object.assign({}, state, { companies: updatedCompanies });
  }
  case 'JOB_DELETE': {
    const updatedCompanies = state.companies.map(company => {
      if (company._id === payload.companyId) {
        const updatedCompany = Object.assign({}, company);
        const updatedJobs = company.jobPosting.filter(job => 
          job._id !== payload._id
        );
        updatedCompany.jobPosting = updatedJobs;

        return updatedCompany;
      }
      return company;
    });
    return Object.assign({}, state, { companies: updatedCompanies });
  }
  
  // EVENT REDUCERS
  case 'EVENT_CREATE': {
    const updatedCompanies = state.companies.map(company => {
      if (company._id === payload.companyId) {
        const updatedCompany = Object.assign({}, company);
        const updatedEvents = [...company.events, payload];
        updatedCompany.events = updatedEvents;

        return updatedCompany;
      }
      return company;
    });
    return Object.assign({}, state, { companies: updatedCompanies });
  }
  case 'EVENT_UPDATE': {
    const updatedCompanies = state.companies.map(company => {
      if (company._id === payload.companyId) {
        const updatedCompany = Object.assign({}, company);
        const updatedEvents = company.events.map(event => {
          if (event._id === payload._id) {
            return event = payload;
          }
          return event;
        });
        updatedCompany.events = updatedEvents;
        return updatedCompany;
      }
      return company;
    });
    return Object.assign({}, state, { companies: updatedCompanies });
  }
  case 'EVENT_DELETE': {
    const updatedCompanies = state.companies.map(company => {
      if (company._id === payload.companyId) {
        const updatedCompany = Object.assign({}, company);
        const updatedEvents = company.events.filter(event => 
          event._id !== payload._id
        );
        updatedCompany.events = updatedEvents;

        return updatedCompany;
      }
      return company;
    });
    return Object.assign({}, state, { companies: updatedCompanies });
  }

  // CONTACT REDUCERS
  case 'CONTACT_CREATE': {
    const updatedCompanies = state.companies.map(company => {
      if (company._id === payload.companyId) {
        const updatedCompany = Object.assign({}, company);
        const updatedContacts = [...company.contacts, payload];
        updatedCompany.contacts = updatedContacts;

        return updatedCompany;
      }
      return company;
    });
    return Object.assign({}, state, { companies: updatedCompanies });
  }
  case 'CONTACT_UPDATE': {
    const updatedCompanies = state.companies.map(company => {
      if (company._id === payload.companyId) {
        const updatedCompany = Object.assign({}, company);
        const updatedContacts = company.contacts.map(contact => {
          if (contact._id === payload._id) {
            return contact = payload;
          }
          return contact;
        });
        updatedCompany.contacts = updatedContacts;
        return updatedCompany;
      }
      return company;
    });
    return Object.assign({}, state, { companies: updatedCompanies });
  }
  case 'CONTACT_DELETE': {
    const updatedCompanies = state.companies.map(company => {
      if (company._id === payload.companyId) {
        const updatedCompany = Object.assign({}, company);
        const updatedContacts = company.contacts.filter(contact => 
          contact._id !== payload._id
        );
        updatedCompany.contacts = updatedContacts;

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