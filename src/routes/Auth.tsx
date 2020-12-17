import { useState } from "react";
import styled from "styled-components";
import { LayoutAuth } from "../components/layouts/LayoutAuth";
import { Button } from "../components/ui/Button";
import { FormInput } from "../components/ui/Input";
import iconVis from "../assets/images/icon/visibility_24px.png";
import iconVisOff from "../assets/images/icon/visibility_off_24px.svg";
import layer from "../assets/images/icon/Layer 1.png";
import { AuthNavigation } from "../components/navigation/AuthNavigation";

export const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onClickIcon = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <LayoutAuth titleText="Sign In" img={<Img src={layer} alt="basket1" />}>
      <FormWrapper>
        <FormInput
          placeholder="Enter Login"
          // value=""
          type="text"
          label="Login"
        />

        <FormInput
          placeholder="Enter Password"
          // value=""
          type={showPassword ? "text" : "password"}
          label="Password"
          icon={
            showPassword ? (
              <img src={iconVis} alt="visibility" />
            ) : (
              <img src={iconVisOff} alt="visibility" />
            )
          }
          onClickIcon={onClickIcon}
        />
        <Button>Sign in</Button>
      </FormWrapper>
      <AuthNavigation
        text="Not a member yet?"
        actionText="Sign Up"
        path="/registration"
      />
    </LayoutAuth>
  );
};

const FormWrapper = styled.div`
  max-width: 366px;
  width: 100%;
`;
const Img = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
  display: inline-block;
`;
