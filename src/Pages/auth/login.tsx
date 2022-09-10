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
import useAuth from '../../ApiServices/login';
import { useAppDispatch } from "../../Hooks/redux.hook"
import { actionSetStudent } from "../../Redux/reducers/auth.reducer"
import { useNavigate } from "react-router-dom"
type Props = {}
const schema = yup.object().shape({
  email: yup.string().required('Bạn phải nhập tên đặng nhập !'),
  password: yup.string().required('Bạn phải nhập mật khẩu !'),
});

const Login = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
    watch,
    getValues,
    reset,
  } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { login } = useAuth()
  watch(["email", "password"])
  const onSubmit = (values: LoginRequest) => {
    login({
      data: values,
      successCallback: async (response: any) => {
        console.log('res', response);
        const { token, students } = response.result.data
        await localStorage.setItem("token", token);
        await dispatch(actionSetStudent(students))
        navigate('/admin')
      },
    })
  }
  return (
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
              onMouseDown={() => clearErrors("email")}
              value={getValues("email")}
              {...register("email")}
            />
            {errors.email && (
              <FormHelperText error>{errors.email?.message}</FormHelperText>
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
  )
}

export default Login