import {
  Box,
  FormControl,
  FormLabel,
  OutlinedInput,
  Button,
  FormHelperText
} from '@mui/material'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'
import { LoginRequest } from "../../Models/login"
import "./auth.scss"
type Props = {}
const schema = yup.object().shape({
  username: yup.string().required('Bạn phải nhập tên đặng nhập !'),
  password: yup.string().required('Bạn phải nhập mật khẩu !'),
});
const Authen = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
    watch,
    getValues,
    setValue,
    reset,
  } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
  });
  watch(["username", "password"])
  const onSubmit = (values: LoginRequest) => {
    console.log('values', values);

  }
  return (
    <div className='auth'>
      <Box className='wrap-form' component='form' onSubmit={handleSubmit(onSubmit)}>
        <Box className='head'>
          <p>
            logo
          </p>
          <p>login</p>
        </Box>
        <Box className='body-form'>
          <Box mt={1}>
            <FormLabel required>Tên đăng nhập</FormLabel>
            <FormControl fullWidth size="small" sx={{ mt: 0.5 }}>
              <OutlinedInput
                placeholder={"Tên đăng nhập"}
                onMouseDown={() => clearErrors("username")}
                value={getValues("username")}
                {...register("username")}
              />
              {errors.username && (
                <FormHelperText error>{errors.username?.message}</FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box mt={1}>
            <FormLabel required>Mật khẩu</FormLabel>
            <FormControl fullWidth size="small" sx={{ mt: 0.5 }}>
              <OutlinedInput
                type='password'
                placeholder={"Mật khẩu"}
                onMouseDown={() => clearErrors("password")}
                value={getValues("password")}
                {...register("password")}
              />
              {errors.password && (
                <FormHelperText error>{errors.password?.message}</FormHelperText>
              )}
            </FormControl>
          </Box>
          <Box >
            <Button variant='contained' type='submit'>
              Đăng nhập
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Authen