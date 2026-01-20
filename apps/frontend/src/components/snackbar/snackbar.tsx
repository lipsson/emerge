import Portal from "@mui/material/Portal";

import { Iconify } from "../iconify";
import { toasterClasses } from "./styles/classes";
import { StyledToaster } from "./styles/styles";

export const Snackbar = () => {
  return (
    <Portal>
      <StyledToaster
        expand
        gap={12}
        offset={16}
        visibleToasts={10}
        position="bottom-center"
        className={toasterClasses.root}
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: `${toasterClasses.toast} toast-notification`,
            icon: `${toasterClasses.icon} toast-icon`,
            // content
            content: `${toasterClasses.content} toast-content`,
            title: `${toasterClasses.title} toast-title`,
            description: toasterClasses.description,
            // button
            actionButton: toasterClasses.actionButton,
            cancelButton: toasterClasses.cancelButton,
            closeButton: `${toasterClasses.closeButton}`,
            // state
            default: toasterClasses.default,
            success: `${toasterClasses.success} toast-success`,
            error: `${toasterClasses.error} toast-error`,
            info: `${toasterClasses.info} toast-info`,
            warning: `${toasterClasses.warning} toast-warning`,
          },
        }}
        icons={{
          loading: <span className={toasterClasses.loadingIcon} />,
          info: (
            <Iconify
              className={toasterClasses.iconSvg}
              icon="solar:info-circle-bold"
            />
          ),
          success: (
            <Iconify
              className={toasterClasses.iconSvg}
              icon="solar:check-circle-bold"
            />
          ),
          warning: (
            <Iconify
              className={toasterClasses.iconSvg}
              icon="solar:danger-triangle-bold"
            />
          ),
          error: (
            <Iconify
              className={toasterClasses.iconSvg}
              icon="solar:danger-bold"
            />
          ),
        }}
      />
    </Portal>
  );
};
