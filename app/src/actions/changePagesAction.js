export function changeToJobs() {
  return {
    type: "CHANGE_TO_JOBS_TAB",
    payload: {
      view_existing_jobs: true,
      create_new_jobs: false
    }
  }
}

export function changeToCreateNewJobs() {
  return {
    type: "CHANGE_TO_CREATE_NEW_JOBS_TAB",
    payload: {
      view_existing_jobs: false,
      create_new_jobs: true
    }
  }
}