'use client'
import Link from 'next/link'
import { useSubscribeState } from "subscribe_state"

export default function Pagination() {
  const [{ nextBtn, previousBtn }, dispatch] = useSubscribeState(["nextBtn", "previousBtn"]);

  return (
    <div>
      <button style={{ color: previousBtn ? 'blue' : 'red' }}>
        Previous
      </button>

      <button style={{ color: previousBtn ? 'blue' : 'red' }}>
        Next
      </button>
    </div>
  );
}