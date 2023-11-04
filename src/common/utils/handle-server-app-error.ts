import { Dispatch } from "redux";
import { appActions } from "app/app.reducer";
import { BaseResponseType } from "common/types/common.types";
import { VoidFunctionComponent } from "react";

/**
 * Обрабатывает ошибки приложения на сервере путем отправки соответствующих действий на основе предоставленных данных.
 * @template D - Тип данных в объекте BaseResponseType.
 * @param {BaseResponseType<D>} data - Данные ответа, содержащие сообщения об ошибке.
 * @param {Dispatch} dispatch - Функция dispatch из Redux.
 * @param {boolean} [showError=true] - Определяет, нужно ли показывать сообщение об ошибке. По умолчанию - true.
 */

export const handleServerAppError = <D>(data: BaseResponseType <D>, dispatch: Dispatch, showError:boolean=true): void => {
 if(showError){
  if (data.messages.length) {
    dispatch(appActions.setAppError({ error: data.messages[0] }));
  } else {
    dispatch(appActions.setAppError({ error: "Some error occurred" }));
  }
 }
   dispatch(appActions.setAppStatus({ status: "failed" }));
};
