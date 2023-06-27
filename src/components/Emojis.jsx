import { Box, Typography } from "@mui/material";
import { Emoji } from "emoji-picker-react";

export const Emojis = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography m={1}>
        <Emoji
          unified="2764-fe0f"
          // // emojiStyle={EmojiStyle.APPLE}
          size={35}
        />
      </Typography>
      <Typography m={1}>
        <Emoji
          unified="2708-fe0f"
          // // emojiStyle={EmojiStyle.APPLE}
          size={35}
        />
      </Typography>
      <Typography m={1}>
        <Emoji
          unified="2603-fe0f"
          // // emojiStyle={EmojiStyle.APPLE}
          size={35}
        />
      </Typography>
    </Box>
  );
};
