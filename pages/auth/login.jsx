import { useFormik } from "formik";
import Link from "next/link";
import Title from "../../components/ui/Title";
import Input from "../../components/form/Input";
import { loginSchema } from "../../schema/login";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const [currentUser, setCurrentUser] = useState();

  const onSubmit = async (values, actions) => {
    const { email, password } = values;
    let options = { redirect: false, email, password };
    try {
      const res = await signIn("credentials", options);
      actions.resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        const user = res.data?.find((user) => user.email === session?.user?.email)
        setCurrentUser(
          user
        );
        session && user && push("/profile/" + user?._id);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [session, push]);
  

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Your E-mail Address",
      value: values.email,
      isrequired: true,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      isrequired: true,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 sm:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title className="text-[40px] mb-6">Login</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input, index) => (
            <Input
              key={index}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col mt-4 gap-y-3 w-full">
          <button type="submit" className="btn-primary">
            LOGIN
          </button>
          <button
            className="btn-primary !bg-secondary"
            type="button"
            onClick={() => signIn("github")}
          >
            <i className="fa-brands fa-github mr-2"></i>GITHUB
          </button>
          <Link href="/auth/register">
            <span className="text-sm underline cursor-pointer text-secondary hover:font-semibold">
              You don&apos;t have an account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export async function getServerSideProps({req}){
    const session = await getSession( { req })

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`)
    const user = res.data.find((user) => user.email === session?.user.email)

    if(session && user){
        return {
            redirect: {
                destination: "/profile/" + user._id,
                permanent: false,
            }
        }
    }

    return {
        props: {},
    }
}

export default Login;
