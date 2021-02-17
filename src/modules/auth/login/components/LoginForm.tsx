import { FC } from "react";
import styled from "styled-components";
import { AuthLayout } from "../../../../components/layouts/AuthLayout";
import { Button } from "../../../../components/ui/Button";
import { Input } from "../../../../components/ui/Input";
import { AuthNavigation } from "../../../../components/navigation/AuthNavigation";
import iconVis from "../../../../assets/images/icons/visibility.svg";
import iconVisOff from "../../../../assets/images/icons/visibility_off.svg";
import layer1 from "../../../../assets/images/login-bg.png";
import { FieldErrors, UseFormMethods } from "react-hook-form";
import { LoginParams } from "../../../../api/auth/AuthDto";
import { pathList } from "../../../../routers/pathList";

interface FormProps
  extends Partial<Pick<UseFormMethods, "register" | "errors">> {
  onClickIcon?: () => void;
  showPassword: boolean;
  onSubmit: () => void;
  errors: FieldErrors<LoginParams>;
}

export const LoginForm: FC<FormProps> = ({
  showPassword,
  onClickIcon,
  onSubmit,
  register,
  errors,
}) => {
  return (
    <AuthLayout titleText="Sign In" img={layer1}>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          label="Login"
          name="login"
          register={register}
          error={errors.login}
          registerOptions={{
            required: "Login is required.",
            pattern: {
              value: /^[a-z0-9_-]{3,16}$/,
              message: "Invalid login.",
            },
          }}
        />

        <Input
          register={register}
          error={errors.password}
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          icon={showPassword ? iconVis : iconVisOff}
          onClickIcon={onClickIcon}
          registerOptions={{
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters.",
            },
          }}
        />
        <Button>Sign In</Button>
      </Form>
      <AuthNavigation
        text="Not a member yet?"
        actionText="Sign Up"
        path={pathList.auth.register}
      />
    </AuthLayout>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 366px;
  width: 100%;
`;
