import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../../style/login.css";
import { loginUser, useAuthState, useAuthDispatch } from "../../context";
const Login = () => {
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState(); //read the values of loading and errorMessage from context

  const onFinish = async (values) => {
    // console.log("Received values of form: ", values);
    const { email, password } = values;
    // console.log(email, password);
    let payload = { email, password };
    try {
      let response = await loginUser(dispatch, payload); //loginUser action makes the request and handles all the neccessary state changes
      if (!response.user) return;
      window.history.push("/dashboard"); //navigate to dashboard on success
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "200px", height: "500px" }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null}
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              disabled={loading}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              disabled={loading}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
