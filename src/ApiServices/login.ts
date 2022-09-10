import { useCallback, useMemo } from "react";
import { useAppDispatch } from "../Hooks/redux.hook";
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { fetchWithLock } from "../Redux/reducers/common.reducer";
import { PATH } from "../Common/constants/path.constants";
import { RequestLogin } from "../Models/login"

const useAuth = () => {
    const dispatch = useAppDispatch();
    /**
     *API login
     * @param payload
     */
    const login = useCallback(
        (payload: RequestLogin) => {
            const { successCallback, errorCallback, data } = payload;
            try {
                const method = "POST";

                dispatch(
                    fetchWithLock({
                        data: {
                            url: 'https://api.vietucedu.vn/api/v1/students/login',
                            data,
                            method
                        },
                        successCallback,
                        errorCallback,
                    })
                );
            } catch (error: any) {
                errorCallback && errorCallback(error);
            }
        },
        [dispatch]
    );


    return useMemo(() => ({
        login
    }), [
        login
    ]);
};

export default useAuth;
