import { ref } from "vue";

export default function useDropZone() {
  const dragActive = ref(false);
  const droppedFile = ref(null);
  const droppedFiles = ref([]);

  const toggle_active = () => {
    if (droppedFile.value == null) {
      dragActive.value = !dragActive.value;
    }
  };

  const drop = (event) => {
    droppedFile.value = event.dataTransfer.files[0];
    droppedFiles.value = event.dataTransfer.files;
  };

  const selectedFile = (event) => {
    droppedFile.value = event.target.files[0];
    droppedFiles.value = event.target.files;
    dragActive.value = true;
  };

  const clearDropped = () => {
    droppedFile.value = null;
    droppedFiles.value = [];
    dragActive.value = false;
  };

  return {
    dragActive,
    droppedFile,
    droppedFiles,
    toggle_active,
    drop,
    selectedFile,
    clearDropped,
  };
}
