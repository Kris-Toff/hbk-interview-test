import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string, date, boolean } from "yup";
import { router } from "@inertiajs/vue3";
import { useStepperStore } from "./stepper";

export const useBusinessStore = defineStore("business", () => {
    const stepperStore = useStepperStore();

    const schema = toTypedSchema(
        object({
            businessName: string().required("Business name is required"),
            businessAddress: string().required("Business address is required"),
            status: string().required("Status is required"),
            registrationDate: date().required("Registration date is required"),
            expiryDate: date().required("Expiry date date is required"),
            isPremiumCompany: boolean(),
            accreditationLevel: string().required(
                "Accreditation level is required"
            ),
        })
    );

    const { errors, defineField, handleSubmit } = useForm({
        validationSchema: schema,
    });

    const [businessName, businessNameAttrs] = defineField("businessName");
    const [businessAddress, businessAddressAttrs] =
        defineField("businessAddress");
    const [status, statusAttrs] = defineField("status");
    const [registrationDate, registrationDateAttrs] =
        defineField("registrationDate");
    const [expiryDate, expiryDateAttrs] = defineField("expiryDate");
    const [isPremiumCompany, isPremiumCompanyAttrs] =
        defineField("isPremiumCompany");
    const [accreditationLevel, accreditationLevelAttrs] =
        defineField("accreditationLevel");

    const onSubmit = handleSubmit((values) => {
        stepperStore.next();
        router.visit("/account", { method: "get" });
    });

    function handlePrevious() {
        stepperStore.prev();
        window.history.back();
    }

    return {
        businessName,
        businessNameAttrs,
        businessAddress,
        businessAddressAttrs,
        status,
        statusAttrs,
        registrationDate,
        registrationDateAttrs,
        expiryDate,
        expiryDateAttrs,
        isPremiumCompany,
        isPremiumCompanyAttrs,
        accreditationLevel,
        accreditationLevelAttrs,
        errors,
        handlePrevious,
        onSubmit,
    };
});
