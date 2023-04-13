<template>
  <div class="content-login">
    <div>
      <Input
        id="usernameLogin"
        label="Username *"
        placeholder="Digite seu username"
        name="username"
        :disabled="loading"
        :default="username"
        :required="true"
        :invalid="enableInvalid && setInvalid('username')"
        @onChange="(val) => (username = val)"
      />
      <Input
        id="passwordLogin"
        label="Senha *"
        placeholder="Digite sua senha"
        name="senha"
        inputType="password"
        :default="password"
        :disabled="loading"
        :required="true"
        :invalid="enableInvalid && setInvalid('password')"
        @onChange="
          (val) => {
            password = val;
          }
        "
      />
    </div>

    <div>
      <Button
        label="Entrar"
        class="btn-login"
        :outline="false"
        :loading="loading"
        @btnClicked="sendForm"
      />

      <Button
        label="Registre-se"
        class="btn-login-register"
        :outline="false"
        :loading="loading"
        @btnClicked="registerForm"
      />
    </div>
  </div>
</template>

<script>
import Input from "@atoms/Input";
import Button from "@atoms/Button";
import { mapActions } from "vuex";

export default {
  name: "LoginInputs",

  components: {
    Input,
    Button,
  },

  computed: {
    verifyInputs: function () {
      return this.username.length > 0 && this.password.length > 0;
    },
  },

  data() {
    return {
      loading: false,
      enableInvalid: false,
      username: "",
      password: "",
    };
  },

  methods: {
    setInvalid(nameVar) {
      const object = {
        username: this.username.length == 0,
        password: this.password.length == 0 || this.password.length < 6,
      };

      return object[nameVar];
    },

    registerForm() {
      this.$emit("showRegisterForm");
    },

    clearInputs() {
      this.enableInvalid = false;
      this.username = "";
      this.password = "";
    },

    sendForm() {
      this.enableInvalid = true;

      if (this.verifyInputs) {
        // Check Password
        if (this.password.length <= 5) {
          this.$notify({
            group: "notifications",
            type: "error",
            title: "Senha Inválida!",
            text: `A senha deve ter ao menos 6 caracteres.`,
          });
          return;
        }
        this.loading = true;

        const payload = {
          username: this.username,
          password: this.password,
        };

        this.login(payload).then((data) => {
          this.loading = false;
          if (!data) return;
          this.$redirect("/home", null);
          this.clearInputs();
        });

      } else {
        this.$showFillFields();
      }
    },

    ...mapActions("auth", ["login"]),
  },
};
</script>

<style lang="scss" scoped>
.content-login {
  width: 100%;
}
</style>