(function() {var implementors = {};
implementors["language_e2e_tests"] = [{"text":"impl <a class=\"trait\" href=\"move_vm_runtime/data_cache/trait.RemoteCache.html\" title=\"trait move_vm_runtime::data_cache::RemoteCache\">RemoteCache</a> for <a class=\"struct\" href=\"language_e2e_tests/data_store/struct.FakeDataStore.html\" title=\"struct language_e2e_tests::data_store::FakeDataStore\">FakeDataStore</a>","synthetic":false,"types":["language_e2e_tests::data_store::FakeDataStore"]}];
implementors["libra_vm"] = [{"text":"impl&lt;'block&gt; <a class=\"trait\" href=\"move_vm_runtime/data_cache/trait.RemoteCache.html\" title=\"trait move_vm_runtime::data_cache::RemoteCache\">RemoteCache</a> for <a class=\"struct\" href=\"libra_vm/data_cache/struct.StateViewCache.html\" title=\"struct libra_vm::data_cache::StateViewCache\">StateViewCache</a>&lt;'block&gt;","synthetic":false,"types":["libra_vm::data_cache::StateViewCache"]},{"text":"impl&lt;'a, S:&nbsp;<a class=\"trait\" href=\"libra_state_view/trait.StateView.html\" title=\"trait libra_state_view::StateView\">StateView</a>&gt; <a class=\"trait\" href=\"move_vm_runtime/data_cache/trait.RemoteCache.html\" title=\"trait move_vm_runtime::data_cache::RemoteCache\">RemoteCache</a> for <a class=\"struct\" href=\"libra_vm/data_cache/struct.RemoteStorage.html\" title=\"struct libra_vm::data_cache::RemoteStorage\">RemoteStorage</a>&lt;'a, S&gt;","synthetic":false,"types":["libra_vm::data_cache::RemoteStorage"]}];
implementors["move_cli"] = [{"text":"impl <a class=\"trait\" href=\"move_vm_runtime/data_cache/trait.RemoteCache.html\" title=\"trait move_vm_runtime::data_cache::RemoteCache\">RemoteCache</a> for <a class=\"struct\" href=\"move_cli/struct.OnDiskStateView.html\" title=\"struct move_cli::OnDiskStateView\">OnDiskStateView</a>","synthetic":false,"types":["move_cli::OnDiskStateView"]}];
implementors["move_vm_test_utils"] = [{"text":"impl <a class=\"trait\" href=\"move_vm_runtime/data_cache/trait.RemoteCache.html\" title=\"trait move_vm_runtime::data_cache::RemoteCache\">RemoteCache</a> for <a class=\"struct\" href=\"move_vm_test_utils/struct.BlankStorage.html\" title=\"struct move_vm_test_utils::BlankStorage\">BlankStorage</a>","synthetic":false,"types":["move_vm_test_utils::storage::BlankStorage"]},{"text":"impl&lt;'a, S:&nbsp;<a class=\"trait\" href=\"move_vm_runtime/data_cache/trait.RemoteCache.html\" title=\"trait move_vm_runtime::data_cache::RemoteCache\">RemoteCache</a>&gt; <a class=\"trait\" href=\"move_vm_runtime/data_cache/trait.RemoteCache.html\" title=\"trait move_vm_runtime::data_cache::RemoteCache\">RemoteCache</a> for <a class=\"struct\" href=\"move_vm_test_utils/struct.DeltaStorage.html\" title=\"struct move_vm_test_utils::DeltaStorage\">DeltaStorage</a>&lt;'a, S&gt;","synthetic":false,"types":["move_vm_test_utils::storage::DeltaStorage"]},{"text":"impl <a class=\"trait\" href=\"move_vm_runtime/data_cache/trait.RemoteCache.html\" title=\"trait move_vm_runtime::data_cache::RemoteCache\">RemoteCache</a> for <a class=\"struct\" href=\"move_vm_test_utils/struct.InMemoryStorage.html\" title=\"struct move_vm_test_utils::InMemoryStorage\">InMemoryStorage</a>","synthetic":false,"types":["move_vm_test_utils::storage::InMemoryStorage"]}];
implementors["resource_viewer"] = [{"text":"impl <a class=\"trait\" href=\"move_vm_runtime/data_cache/trait.RemoteCache.html\" title=\"trait move_vm_runtime::data_cache::RemoteCache\">RemoteCache</a> for <a class=\"struct\" href=\"resource_viewer/struct.NullStateView.html\" title=\"struct resource_viewer::NullStateView\">NullStateView</a>","synthetic":false,"types":["resource_viewer::NullStateView"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()