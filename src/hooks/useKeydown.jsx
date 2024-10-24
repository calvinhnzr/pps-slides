import { useEffect, useCallback } from "react"

function useKeydown(callback) {
  const handleKeyDown = useCallback(
    (event) => {
      callback(event)
    },
    [callback]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])
}

export default useKeydown
