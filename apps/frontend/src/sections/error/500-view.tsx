import { ServerErrorIllustration } from "@/assets/illustrations";

import { MotionContainer, varBounce } from "@/components/animate";

import { SimpleLayout } from "@/layouts/simple";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { m } from "framer-motion";

export function View500() {
  return (
    <SimpleLayout content={{ compact: true }}>
      <Container component={MotionContainer}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            500 Internal server error
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{ color: "text.secondary" }}>
            Jest problem z serwerem systemu
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <ServerErrorIllustration sx={{ my: { xs: 5, sm: 10 } }} />
        </m.div>
      </Container>
    </SimpleLayout>
  );
}
