import {readFileSync} from "fs";

interface Configuration {

  discord: {
    applicationId: string;
    botId: string;
    token: string;
    emojis: {
      airhorn: string;
    };
  };
  
  settings: {
    maxQueueSize: number;
  }

  sounds: {
    [key: string]: {
      name: string;
      description: string;
      emoji: string | undefined;
      variants: {
        [key: string]: string;
      };
    };
  };
}

export const config: Configuration = JSON.parse(readFileSync("./config.json").toString());
