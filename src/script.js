document.addEventListener("DOMContentLoaded", () => {
    const splineModel = document.getElementById("spline-model")
    const loading = document.getElementById("loading")
  
    splineModel.addEventListener("load", () => {
      loading.style.display = "none"
    })
  
    // Fallback if load event doesn't fire
    setTimeout(() => {
      loading.style.display = "none"
    }, 5000)
  })
  
  