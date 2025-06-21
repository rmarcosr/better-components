# Contribution Guidelines

## Requirements

- Angular 18 (later versions may work but are not officially supported for development)  
- A GitHub account  
- All commits, issues, and code must be written in English  

## Setup Instructions

1. Clone the repository.  
2. Create a new Angular project.  
3. Copy the library source code into a subfolder (e.g., ```projects/better-components```) inside your Angular project.  
4. Add the following script to your project's ```package.json```:

   ```"start-library": "npm link ./projects/better-components && ng serve -o"```

   This script allows you to run both the library and the main application simultaneously, making it easier to test your changes in real time.

   Now run:

   ```npm run start-library```

## Submitting Your Changes

- Create a new branch for each contribution using the following naming convention:

  ```@your-username/short-description```

  **Example:**  
  ```@marcosrr/create-table-component```

- Use commit message prefixes to clearly indicate the type of change:

  - ```feat:``` for new features  
  - ```fix:``` for bug fixes  
  - ```docs:``` for documentation updates  

  Check the commit history for examples and follow the existing style.

## Important Notes

- **Do not** modify the library’s ```package.json``` file.  
- **Do not** package or attempt to publish the library to npm. That will be managed by the project maintainer.
