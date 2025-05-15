# Open Source GitHub Repos API

## Overview

This project provides a simple RESTful API built with Node.js and Express that serves a list of open-source GitHub repositories, along with their respective links and star counts. The API fetches data directly from GitHub's API and includes custom repositories specified in the configuration.

## Features

- Fetch a list of open-source repositories from GitHub.
- Sort repositories based on the number of stars and forks.
- Simple REST API structure for easy integration.

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devsdenepal/api-osp.git
   cd devsdenepal/api-osp
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

### Configuration

- Ensure your custom repositories are defined in `repos.js`. Add or modify repositories as needed.

### Running the API

To start the server, run:

```bash
node index.js
```

The API will be available at `https://apiosp.vercel.app/repos`.

### Example Request

You can use a tool like Postman or curl to test the API:

```bash
curl https://apiosp.vercel.app/repos
```

### Response Format

The API returns a JSON array of repositories, each containing:

- `name`: The name of the repository.
- `url`: The GitHub link to the repository.
- `stars`: The number of stars the repository has received.
- `forks`: The number of forks of the repository.

Example Response:

```json
[
  {
    "name": "React",
    "url": "https://github.com/facebook/react",
    "stars": 195000,
    "forks": 39200
  },
  {
    "name": "Bootstrap",
    "url": "https://github.com/twbs/bootstrap",
    "stars": 164000,
    "forks": 77900
  }
]
```

## Contributing

Contributions are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to the branch and submit a pull request.

