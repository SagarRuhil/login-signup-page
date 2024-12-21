import Image from 'next/image'

export function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80"
        alt="Beautiful forest landscape"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay" />
    </div>
  )
}

