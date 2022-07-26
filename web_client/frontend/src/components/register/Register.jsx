import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    DatePicker,
    notification,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Container } from "@material-ui/core";
import "./Register.css";
import Axios from "axios";
import { useHistory } from "react-router-dom";
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function UserRegister(props) {
    const [form] = Form.useForm();
    const token = localStorage.getItem("token");
    const history = useHistory();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        let body = {
            "name": values.Username,
            "email": values.email,
            "password": values.password,
            "role": "admin",
        };
        console.log("body ", body)
        Axios.post(`/api/auth/register`, body)
        .then(res => {
            console.log("res ", res.data);
            notification.success({
                message: "Register successfully!",
                style: {
                    borderRadius: 15,
                    backgroundColor: "#b7eb8f",
                },
                duration: 2,
            });
            setTimeout(() => {
                history.push("/login");
            }, 500);
        })
        .catch(err => {
            console.log("err ", err);
            notification.error({
                message: "Register fail!",
                style: {
                    borderRadius: 15,
                    backgroundColor: "#fff2f0",
                },
                duration: 2,
            });
        })
        // Axios.post(`/api/customer/upload`, body, {headers: {"Authorization": token,}})
        // .then(res => {
        //     notification.success({
        //         message: "Register successfully!",
        //         style: {
        //             borderRadius: 15,
        //             backgroundColor: "#b7eb8f",
        //         },
        //         duration: 2,
        //     });
        // })
        // .catch(err => {
        //     notification.error({
        //         message: "Register fail!",
        //         style: {
        //             borderRadius: 15,
        //             backgroundColor: "#fff2f0",
        //         },
        //         duration: 2,
        //     });
        // })
    };
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(
                [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
            );
        }
    };

    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));
    return (
        <Container style={{ display: "flex", justifyContent: "center" }}>
            <div className="register">
                <div className="title-register">Register user</div>
                <div className="form">
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            residence: ["zhejiang", "hangzhou", "xihu"],
                            prefix: "86",
                        }}
                        scrollToFirstError
                        style={{ paddingRight: 136 }}
                    >
                        <Form.Item
                            name="Username"
                            label={
                                <span>
                                    Nickname&nbsp;
                                    <Tooltip title="Username login">
                                        <QuestionCircleOutlined />
                                    </Tooltip>
                                </span>
                            }
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your nickname!",
                                    whitespace: true,
                                },
                                {
                                    max: 50,
                                    message:
                                        "The length should not exceed 50 characters!",
                                },
                                {
                                    min: 6,
                                    message:
                                        "The length must not be less than 6 characters!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                // {
                                //     type: "email",
                                //     message: "The input is not valid E-mail!",
                                // },
                                {
                                    required: true,
                                    message: "Please input your E-mail!",
                                },
                                {
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "The input is not valid E-mail!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                                {
                                    min: 8,
                                    message:
                                        "The length must not be less than 8 characters!",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your password!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (
                                            !value ||
                                            getFieldValue("password") === value
                                        ) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(
                                            "The two passwords that you entered do not match!"
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        {/* <Form.Item
                            name="birthday"
                            label="Birthday"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your birthday!",
                                },
                            ]}
                        >
                            <DatePicker />
                        </Form.Item> */}

                        {/* <Form.Item
                            name="gender"
                            label="Gender"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your gender!",
                                },
                            ]}
                        >
                            <Select placeholder="Please select your gender">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                            </Select>
                        </Form.Item> */}

                        

                        {/* <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your phone number!",
                                },
                                {
                                    pattern: /((09|03|07|08|05)+([0-9]{8,9})\b)/g,
                                    message: "abc!",
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: "100%",
                                }}
                            />
                        </Form.Item> */}

                        

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value
                                            ? Promise.resolve()
                                            : Promise.reject(
                                                  "Should accept agreement"
                                              ),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox>You must comply with our rules</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Container>
    );
}

export default UserRegister;
