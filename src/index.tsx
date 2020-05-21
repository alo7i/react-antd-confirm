import { Modal } from 'antd';

export default (props: any) => {
  return new Promise((resolve) => {
    return Modal.confirm(
      Object.assign(props, {
        onOk: () => {
          resolve(true);
        },
        onCancel: () => {
          resolve(false);
        }
      })
    )
  })
}