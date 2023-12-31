import { Popconfirm } from 'antd'
import { memo } from 'react'
import { MVError } from '../../../components/Message';

const MVConfirm = memo(({ title, cancelText, okText, onConfirm, children, ...rest }: any) => {
  const cancel = () => {
    MVError('Hủy');
  }
  return (
    <Popconfirm
      title={title}
      onCancel={cancel}
      onConfirm={onConfirm}
      okText={okText}
      cancelText={cancelText}
      {...rest}
    >{children}</Popconfirm>
  )
})

export default MVConfirm