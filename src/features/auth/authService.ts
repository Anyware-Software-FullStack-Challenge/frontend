import axiosInstance from "../../api/axiosInstance";

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<string> => {
  const response = await axiosInstance.post("/auth/login", {
    email,
    password,
  });

  return response.data.token;
};

const authService = {
  login,
};

export default authService;
