import Button from "@/components/Button.vue";
// import Checkbox from "@/components/checkbox/checkbox.vue";
// import CheckboxGroup from "@/components/checkbox/CheckboxGroup.vue";
// import Input from "@/components/Input.vue";
// import ProgressBar from "@/components/Progress/ProgressBar.vue";
// import ProgressCircle from "@/components/Progress/ProgressCircle.vue";
// import Radiobutton from "@/components/Radiobutton.vue";
// import Tabs from "@/components/Tabs.vue";

export default {
  install: (app, options) => {
    app.component("AppButton", Button);
    // app.component("AppCheckbox", Checkbox);
    // app.component("CheckboxGroup", CheckboxGroup);
    // app.component("Input", Input);
    // app.component("ProgressBar", ProgressBar);
    // app.component("ProgressCircle", ProgressCircle);
    // app.component("Radiobutton", Radiobutton);
    // app.component("Tabs", Tabs);
  },
};
