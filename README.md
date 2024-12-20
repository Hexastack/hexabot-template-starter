# Hexabot Template Using Ludwig NLU

Welcome to the **Hexabot Template Ludwig** repository! This template provides everything you need to get started with building a custom Hexabot project. It includes essential folders and files to help you extend Hexabot, define your own modules, and quickly run your project in Docker. Below you'll find details on the structure and how to use this template.

Not familiar with [Hexabot](https://hexabot.ai/) ? It's an open-source chatbot / agent solution that allows users to create and manage AI-powered, multi-channel, and multilingual chatbots with ease. If you would like to learn more, please visit the [official github repo](https://github.com/Hexastack/Hexabot/).

## Project Structure

- **extensions/**: This folder is where you can develop your own extensions for Hexabot. Inside, you'll find subfolders for:

  - **channels/**: Add new messaging channels.
  - **helpers/**: Add helper functions or utilities.
  - **plugins/**: Create plugins to create custom blocks in the visual editor. Plugins is where you can perform text-to-action and integrate with 3rd party APIs. To get started, there is a `hello` plugin provided as an example.

- **modules/**: Since Hexabot API is built on top of NestJS, this folder allows you to extend the Hexabot API by adding your own modules (controllers, services, etc.).

- **Dockerfile**: Use this file to build a Docker image on top of Hexabot. It's pre-configured to get your project up and running in a containerized environment.

- **docker/docker-compose.yml**: This file defines the services needed to run your Hexabot project using Docker Compose. It simplifies the setup of multiple services such as databases or other dependencies.

## Getting Started

1. **Install Hexabot CLI**:
   To create a new Hexabot project, first install the Hexabot CLI globally:

   ```bash
   npm install -g hexabot-cli
   ```

2. **Create Your Project**:
   Use the Hexabot CLI to create a new chatbot project:

   ```bash
   hexabot create my-chatbot
   ```

3. **Configure Your Environment**:

   - Copy the `.env.example` file to `.env` and customize it according to your environment and configuration needs.

   ```bash
   cp .env.example .env
   ```

4. **Run the Project**:
   Navigate into the newly created folder and run the following command to start the project in development mode:

   ```bash
   hexabot dev
   ```

   For production mode, you can use:

   ```bash
   hexabot start
   ```

   _Note_: The first run may take some time as it needs to download all required Docker images.

5. **Configure your NLU Engine**:
   After creating your new project, the **Hexabot LLM-NLU Engine** will be enabled by default. This NLU engine relies on one of the following LLM helpers being present, you can enable one of these by following the steps detailed in [LLM NLU Engine](https://docs.hexabot.ai/user-guide/nlu/nlu-engines/llm-nlu-engine) documentation page:

   - Ollama Helper (`hexabot-helper-ollama`)
   - Google Gemini Helper (`hexabot-helper-gemini`)
   - OpenAI ChatGPT Helper (`hexabot-helper-chatgpt`)

   You must follow the instructions of the selected LLM helper in their specific documentation before starting the project.

## Built-in Features

This template includes both the Ollama **helper** and **plugin** by default to help you get started with NLU and generative AI features.

## Extending Hexabot

You can easily extend Hexabot's functionality by installing additional extensions (channels, helpers, plugins) via npm. Below are some examples:

- Install a new channel (e.g., Messenger):

  ```bash
  npm install hexabot-channel-messenger
  ```

- Install a new plugin (e.g., ChatGPT integration):
  ```bash
  npm install hexabot-plugin-chatgpt
  ```

## Docker Setup

This template comes with a pre-configured **Dockerfile** and **docker-compose.yml** to help you containerize your project quickly.

- **Dockerfile**: Builds your Hexabot-based project.
- **docker-compose.yml**: Defines the necessary services for your project, allowing you to start everything with a single command.

## Documentation

For detailed information on how to get started, as well as in-depth user and developer guides, please refer to our full documentation available in the docs folder or visit the [Documentation](https://docs.hexabot.ai).

## Contributing

We welcome contributions from the community! Whether you want to report a bug, suggest new features, or submit a pull request, your input is valuable to us.

Please refer to our contribution policy first : [How to contribute to Hexabot](https://github.com/Hexastack/Hexabot/blob/main/CONTRIBUTING.md)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)

Feel free to join us on [Discord](https://discord.gg/rNb9t2MFkG)

## License

This software is licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:

1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).

---

Happy building with Hexabot! 🎉
