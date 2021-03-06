export interface Schema {
  // The name of the state.
  name: string;
  // The path to create the state.
  path?: string;
  // The name of the project.
  project?: string;
  // Allows specification of the declaring module.
  module?: string;
  // Flag to indicate if a dir is created.
  flat?: boolean;
  // Specifies whether this is the root state or child state.
  root?: boolean;
  // The path to graphql file with the state.
  graphql?: string;
}
