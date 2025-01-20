import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "../config/axios";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Link as MuiLink,
  Tabs,
  Tab,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const [userType, setUserType] = useState("user");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleTabChange = (event, newValue) => {
    setUserType(newValue);
    setError("");
  };

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post("/api/login/", values);

      if (response.data) {
        // Store user info in localStorage
        localStorage.setItem("userInfo", JSON.stringify(response.data));

        // Navigate based on user type
        if (response.data.user_type === "admin") {
          navigate("/admin-home", { replace: true });
        } else {
          navigate("/user-home", { replace: true });
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response?.data?.error) {
        setFieldError("email", error.response.data.error);
      } else {
        setFieldError("email", "An error occurred during login");
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Check if user is already logged in
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const user = JSON.parse(userInfo);
      if (user.user_type === "admin") {
        navigate("/admin-home", { replace: true });
      } else {
        navigate("/user-home", { replace: true });
      }
    }
  }, [navigate]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <Tabs value={userType} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="User Login" value="user" />
          <Tab label="Admin Login" value="admin" />
        </Tabs>

        {error && (
          <Box sx={{ mb: 2, width: "100%" }}>
            <Typography color="error" align="center">
              {error}
            </Typography>
          </Box>
        )}

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                margin="normal"
                name="email"
                label="Email"
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
              />

              <Field
                as={TextField}
                fullWidth
                margin="normal"
                name="password"
                label="Password"
                type="password"
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
              />

              <Box sx={{ mt: 2, textAlign: "right" }}>
                <MuiLink
                  component={RouterLink}
                  to="/forgot-password"
                  variant="body2"
                >
                  Forgot password?
                </MuiLink>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
              >
                Login
              </Button>

              <Box sx={{ textAlign: "center" }}>
                <MuiLink component={RouterLink} to="/signup" variant="body2">
                  Don't have an account? Sign Up
                </MuiLink>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
