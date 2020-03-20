-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-03-2020 a las 13:28:31
-- Versión del servidor: 10.1.33-MariaDB
-- Versión de PHP: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ishop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archive`
--

CREATE TABLE `archive` (
  `id` int(11) NOT NULL,
  `createdAt` bigint(20) DEFAULT NULL,
  `fromModel` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `originalRecord` longtext COLLATE utf8_spanish2_ci,
  `originalRecordId` longtext COLLATE utf8_spanish2_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bancos`
--

CREATE TABLE `bancos` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `titulo` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `detalle` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `calificacion` double DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `idPersona` int(11) DEFAULT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `idComentario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`createdAt`, `updatedAt`, `id`, `nombre`, `estado`) VALUES
('2020-03-18T04:06:41.331Z', '2020-03-18T04:06:41.331Z', 1, 'Zapatos', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudad`
--

CREATE TABLE `ciudad` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `idPais` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `cedula` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `celular` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idFoto` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colores`
--

CREATE TABLE `colores` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `detalle` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nick` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `idPais` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `estado` double DEFAULT NULL,
  `codigo` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `comision` double DEFAULT NULL,
  `ciudadCliente` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `emailCliente` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cedulaCliente` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `numeroCliente` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `emailVendedor` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cedulaVendedor` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `direccionCliente` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_pedido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idCliente` int(11) DEFAULT NULL,
  `idVendedor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturasarticulos`
--

CREATE TABLE `facturasarticulos` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `precio` double DEFAULT NULL,
  `cantidad` double DEFAULT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `factura` int(11) DEFAULT NULL,
  `producto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `estado` double DEFAULT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `idPersona` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `globalmensajes`
--

CREATE TABLE `globalmensajes` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `estado` double DEFAULT NULL,
  `emisor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `globalmensajesmultimedia`
--

CREATE TABLE `globalmensajesmultimedia` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `estado` double DEFAULT NULL,
  `idGlobalMensaje` int(11) DEFAULT NULL,
  `idMultimedia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`createdAt`, `updatedAt`, `id`, `nombre`, `estado`) VALUES
('2020-03-18T04:11:31.605Z', '2020-03-18T04:11:31.605Z', 1, 'Hugo Boss', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `estado` double DEFAULT NULL,
  `detalle` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idMensaje` int(11) DEFAULT NULL,
  `idEmisor` int(11) DEFAULT NULL,
  `remitente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajesmultimedia`
--

CREATE TABLE `mensajesmultimedia` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `estado` double DEFAULT NULL,
  `idMensajes` int(11) DEFAULT NULL,
  `idMultimedia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `multimedia`
--

CREATE TABLE `multimedia` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `recurso` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `producto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `multimedia`
--

INSERT INTO `multimedia` (`createdAt`, `updatedAt`, `id`, `recurso`, `estado`, `producto`) VALUES
('2020-03-18T03:34:08.022Z', '2020-03-18T21:59:17.936Z', 1, 'ea1423110cf35ee2df73b34be93a9dc206ae7784.jpg', 0, 1),
('2020-03-18T03:37:08.082Z', '2020-03-18T21:59:43.790Z', 2, '9fee2ad541203621adb37acccec08ba3331845f0.jpg', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificaciones`
--

CREATE TABLE `notificaciones` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `contenido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `idPersona` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `monto` double DEFAULT NULL,
  `detalle` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `idPersona` int(11) DEFAULT NULL,
  `idBanco` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `moneda` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `conteoPuntos` double DEFAULT NULL,
  `idToken` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cedula` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `celular` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idFoto` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `rol` int(11) DEFAULT NULL,
  `idBanco` int(11) DEFAULT NULL,
  `idGenero` int(11) DEFAULT NULL,
  `idCiudad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pesos`
--

CREATE TABLE `pesos` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `valor` double DEFAULT NULL,
  `cantidad` double DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantillas`
--

CREATE TABLE `plantillas` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `elemento` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `valor` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productocolores`
--

CREATE TABLE `productocolores` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `estado` double DEFAULT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `idColor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `titulo` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `cantidad` double DEFAULT NULL,
  `precioVenta` double DEFAULT NULL,
  `precioCompra` double DEFAULT NULL,
  `precioOferta` double DEFAULT NULL,
  `detalle` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `subasta` tinyint(1) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `rating` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `idSubCategoria` int(11) DEFAULT NULL,
  `idEmpresa` int(11) DEFAULT NULL,
  `idPeso` int(11) DEFAULT NULL,
  `marca` int(11) DEFAULT NULL,
  `genero` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`createdAt`, `updatedAt`, `id`, `titulo`, `slug`, `cantidad`, `precioVenta`, `precioCompra`, `precioOferta`, `detalle`, `subasta`, `image`, `rating`, `estado`, `idSubCategoria`, `idEmpresa`, `idPeso`, `marca`, `genero`) VALUES
('2020-03-18T03:37:08.197Z', '2020-03-18T21:57:50.787Z', 1, 'Zapato Hugo Boss', 'Zapato Hugo Boss', 5, 210000, 0, 0, 'Descripcion de prueba', 0, '9fee2ad541203621adb37acccec08ba3331845f0.jpg', '5', 0, 1, 1, NULL, 1, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productosmultimedia`
--

CREATE TABLE `productosmultimedia` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `estado` double DEFAULT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `idMultimedia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productosmultimedia`
--

INSERT INTO `productosmultimedia` (`createdAt`, `updatedAt`, `id`, `estado`, `idProducto`, `idMultimedia`) VALUES
('2020-03-18T03:37:08.423Z', '2020-03-18T03:37:08.423Z', 1, 0, 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productotallas`
--

CREATE TABLE `productotallas` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `estado` double DEFAULT NULL,
  `idProducto` int(11) DEFAULT NULL,
  `idTalla` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntos`
--

CREATE TABLE `puntos` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `valorAnterior` double DEFAULT NULL,
  `valorEntrante` double DEFAULT NULL,
  `valorTotal` double DEFAULT NULL,
  `detalle` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `idPersonas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regalos`
--

CREATE TABLE `regalos` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `titulo` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `subtitulo` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `foto` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `rol` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `detalle` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategoria`
--

CREATE TABLE `subcategoria` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL,
  `detalle` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `idCategoria` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `subcategoria`
--

INSERT INTO `subcategoria` (`createdAt`, `updatedAt`, `id`, `nombre`, `estado`, `detalle`, `idCategoria`) VALUES
('2020-03-18T04:07:18.885Z', '2020-03-18T04:07:30.236Z', 1, 'Deportivo', 0, '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tallas`
--

CREATE TABLE `tallas` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `detalle` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tokens`
--

CREATE TABLE `tokens` (
  `createdAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `updatedAt` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `tokens` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estado` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archive`
--
ALTER TABLE `archive`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `bancos`
--
ALTER TABLE `bancos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `facturasarticulos`
--
ALTER TABLE `facturasarticulos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `globalmensajes`
--
ALTER TABLE `globalmensajes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `globalmensajesmultimedia`
--
ALTER TABLE `globalmensajesmultimedia`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `mensajesmultimedia`
--
ALTER TABLE `mensajesmultimedia`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `multimedia`
--
ALTER TABLE `multimedia`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `pesos`
--
ALTER TABLE `pesos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `plantillas`
--
ALTER TABLE `plantillas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `productocolores`
--
ALTER TABLE `productocolores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `productosmultimedia`
--
ALTER TABLE `productosmultimedia`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `productotallas`
--
ALTER TABLE `productotallas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `puntos`
--
ALTER TABLE `puntos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `regalos`
--
ALTER TABLE `regalos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `tallas`
--
ALTER TABLE `tallas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indices de la tabla `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archive`
--
ALTER TABLE `archive`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bancos`
--
ALTER TABLE `bancos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `ciudad`
--
ALTER TABLE `ciudad`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `colores`
--
ALTER TABLE `colores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `facturasarticulos`
--
ALTER TABLE `facturasarticulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `globalmensajes`
--
ALTER TABLE `globalmensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `globalmensajesmultimedia`
--
ALTER TABLE `globalmensajesmultimedia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `mensajesmultimedia`
--
ALTER TABLE `mensajesmultimedia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `multimedia`
--
ALTER TABLE `multimedia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `notificaciones`
--
ALTER TABLE `notificaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pesos`
--
ALTER TABLE `pesos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `plantillas`
--
ALTER TABLE `plantillas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productocolores`
--
ALTER TABLE `productocolores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productosmultimedia`
--
ALTER TABLE `productosmultimedia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `productotallas`
--
ALTER TABLE `productotallas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `puntos`
--
ALTER TABLE `puntos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `regalos`
--
ALTER TABLE `regalos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `subcategoria`
--
ALTER TABLE `subcategoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tallas`
--
ALTER TABLE `tallas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
