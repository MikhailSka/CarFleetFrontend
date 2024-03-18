import { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface LoginFormInputs {
  email: string
  password: string
}

export const useLoginForm = () => {
  const navigate = useNavigate()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>()

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      console.log("login")
      navigate('/')
    } catch (error) {
      // Handle login errors, if necessary
    }
  }

  return { control, handleSubmit, register, errors, onSubmit }
}
