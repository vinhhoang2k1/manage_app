/* eslint-disable no-console */
import { call, put, takeEvery } from "redux-saga/effects";
import { FetcherRequest, SuccessResponse } from "../../Models/fetch.models";
import { fetchApi } from "../../utils/config_request";
import {
  changeMessageDialog,
  fetchWithLock,
  lockScreen,
  setIsLoading,
  unLockScreen,
} from "../reducers/common.reducer";

function* handleFetcher({ payload }: { payload: FetcherRequest }): any {
  yield put(lockScreen());
  // get parameters in payload
  const { data, successCallback, errorCallback } = payload;
  // call axios for request
  try {
    // Promise<Response>
    const response: any = yield call(fetchApi, data);
    const dataResponse: SuccessResponse<any> = {
      status: response.status,
      result: response.data,
    };
    // handle success
    try {
      successCallback && successCallback(dataResponse);
    } catch (error) {
      //
    }
  } catch (error: any) {
    const response = error;
    // if response status is 401 or 403 mean Unauthorized.
    if (response?.status === 401 || response?.status === 403) {
      // show message
      yield put(
        changeMessageDialog({
          open: true,
          data: {
            type: "ERROR",
            title: "Yêu cầu đăng nhập.",
            message: "Yêu cầu đăng nhập.",
          },
        })
      );
      // logout
      // yeild put(logout());
      window.location.href = '/auth/login'

      // clear data
      localStorage.clear();

      // clear session storage
      sessionStorage.clear();
    } else {
      // show error message

      yield put(
        changeMessageDialog({
          open: true,
          data: {
            type: "ERROR",
            title: "Thông báo",
            message: error.data?.message || "Đã có lỗi vui thử lại",
          },
        })
      );
    }

    // error callback
    errorCallback && errorCallback(response);
    // end process
    return;
  } finally {
    yield put(setIsLoading(false));
    yield put(unLockScreen());
  }
}

export default function* fetcher() {
  yield takeEvery(fetchWithLock, handleFetcher);
}
