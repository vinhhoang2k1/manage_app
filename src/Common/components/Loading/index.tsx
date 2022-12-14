import { Backdrop, Box, useTheme } from "@mui/material";
import { BallClipRotateMultiple } from "react-pure-loaders";
import useCommon from "../../../Hooks/common";
export default function Loading() {
  const theme = useTheme();
  const { isLoading } = useCommon();
  return (
    <Backdrop open={isLoading} sx={{ zIndex: 10000000 }} >
      <Box
        position="fixed"
        top="50%"
        left="50%"

        sx={{
          transform: "translate(-50%,-50%)",
        }}
      >
        <Box sx={{ transform: "scale(2.5)" }}>
          <BallClipRotateMultiple color={theme.palette.primary.main} loading />
        </Box>
      </Box>
    </Backdrop >
  );
}
