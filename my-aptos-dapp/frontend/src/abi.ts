export const ABI = {"address":"0xb6d41c16771910914a008161178a07b5b40c062e24b24bf29f6a057203fa1841","name":"todolist","friends":[],"exposed_functions":[{"name":"complete_task","visibility":"public","is_entry":true,"is_view":false,"generic_type_params":[],"params":["&signer","u64"],"return":[]},{"name":"create_list","visibility":"public","is_entry":true,"is_view":false,"generic_type_params":[],"params":["&signer"],"return":[]},{"name":"create_task","visibility":"public","is_entry":true,"is_view":false,"generic_type_params":[],"params":["&signer","0x1::string::String"],"return":[]}],"structs":[{"name":"Task","is_native":false,"abilities":["copy","drop","store"],"generic_type_params":[],"fields":[{"name":"address","type":"address"},{"name":"content","type":"0x1::string::String"},{"name":"completed","type":"bool"}]},{"name":"TodoList","is_native":false,"abilities":["key"],"generic_type_params":[],"fields":[{"name":"tasks","type":"vector<0xb6d41c16771910914a008161178a07b5b40c062e24b24bf29f6a057203fa1841::todolist::Task>"},{"name":"set_task_event","type":"0x1::event::EventHandle<0xb6d41c16771910914a008161178a07b5b40c062e24b24bf29f6a057203fa1841::todolist::Task>"}]}]} as const
