const draggbles = document.querySelectorAll(".draggble")
const containers = document.querySelectorAll(".container")

draggbles.forEach((draggble) => {
  //for start dragging costing opacity
  draggble.addEventListener("dragstart", () => {
    draggble.classList.add("dragging")
  })

  //for end the dragging opacity costing
  draggble.addEventListener("dragend", () => {
    draggble.classList.remove("dragging")
  })
})

containers.forEach((container) => {
  //for adding dragged box to another container
  container.addEventListener("dragover", () => {
    const dragging = document.querySelector(".dragging")
    container.appendChild(dragging)
  })
})
