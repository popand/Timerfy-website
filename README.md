# Timerfy Website

The official website for **Timerfy** - an open-source distributed countdown timer system designed for real-time synchronization across multiple devices.

## About Timerfy

Timerfy provides a flexible, high-performance timer solution for various professional and educational settings. The core system delivers real-time synchronization with sub-100ms latency and supports multiple concurrent users.

### Key Features

- **Real-time synchronization** with sub-100ms latency
- **Multi-device support** (desktop, tablet, mobile)
- **Scalable architecture** supporting 50+ concurrent rooms with 20+ viewers each
- **Automatic room management** with 24-hour expiration
- **Customizable timer configurations**
- **REST API and WebSocket integration**
- **Open-source** with MIT license

### Use Cases

- Conference presentations
- Classroom activities
- Corporate events
- Sports competitions
- Broadcasting
- Workshop timing

## Technology Stack

**Backend (Core System):**
- Java 17+ with Spring Boot
- Redis for state management
- Spring WebSocket with STOMP protocol

**Frontend (This Website):**
- Next.js 15 with React 19
- TypeScript
- Tailwind CSS
- Radix UI components

## Related Projects

- **[Timerfy Server](https://github.com/popand/Timerfy)** - The core distributed timer system
- **[API Documentation](https://docs.timerfy.io)** - Complete API reference
- **[Support](mailto:support@timerfy.io)** - Technical support and questions

## Development

This website is built with Next.js and serves as the main landing page and documentation for the Timerfy project.

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

We welcome contributions to both the website and the core Timerfy system. Please see the [main repository](https://github.com/popand/Timerfy) for contribution guidelines.

## License

MIT License - see the [LICENSE](https://github.com/popand/Timerfy/blob/main/LICENSE) file for details.

## Support

- **GitHub Issues**: [Report issues](https://github.com/popand/Timerfy/issues)
- **Email**: support@timerfy.io
- **Documentation**: [docs.timerfy.io](https://docs.timerfy.io)