<template>
  <div class="m-input-field input-div">
    <p :for="id" v-if="label" class="title-label">{{label}}</p>
    <b-form-select 
      v-model="selected"
      class="input"
      :id="id"
      :name="name"
      :options="options"
      :required="required"  
      :multiple="multiple"  
      :disabled="disabled"
      :class="{'invalid': invalid}"
    >
    </b-form-select>
  </div>
</template>

<script>


export default {
  name: 'Select',
  // components: {},
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    default: {
      type: [String, Number, null],
      required: false,
      default: null
    },
    options: {
      type: [Array, Object],
      description: "Options of checkbox"
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    invalid: {
      type: Boolean,
      required: false,
      default: false
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      selected: this.default
    }
  },
  watch: {
    selected: function (val) {
      this.$emit("selectedSelect", this.selected);
    },
    default: function (val) {
      this.selected = val;
    }
  }
}
</script>

<style lang="scss" scoped> 
  .title-label {
    color: $_blue-strong;
    font-size: 13px !important;
    font-weight: 600 !important;
    margin: 0 0 5px 0 !important;
  }
  .input-div {
    padding-top: 20px;
  }

  .input-div p{
    margin: 0 0 9px 0;
    font-size:14px;
  }

  .input {
    border: 1px solid $_border-tint !important;
  }
  .input:active,
  .input:focus {
    outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
  }
  .input::placeholder {
    color: $_border-tint;
    font-size: 90%;
  }

  .invalid {
    border: 1px solid $_error !important;
  }

  .input::-ms-input-placeholder {
    color: $_border-tint;
    font-size: 90%;
  }

</style>