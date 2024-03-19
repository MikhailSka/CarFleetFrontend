import { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface RigisterFormInputs {
  email: string
  password: string
}

export const useRigisterForm = () => {
  const navigate = useNavigate()
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RigisterFormInputs>()

  const onSubmit: SubmitHandler<RigisterFormInputs> = async (data) => {
    try {
      console.log("register")
      navigate('/')
    } catch (error) {
      // Handle login errors, if necessary
    }
  }

  return { control, handleSubmit, register, errors, onSubmit }
}
