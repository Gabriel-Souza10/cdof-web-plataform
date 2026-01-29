import type { Unidade } from "./types";

export const ROUTES = {
  aulasOnline: "/AulasOnline",
  gestao: "/logingestao",
  aluno: "/aluno",
  cadastro: "/cadastro",
} as const;

export const SOCIAL = {
  whatsapp: "https://wa.me/5511961171914",
  whatsappAtleta:
    "https://wa.me/5511961171914?text=Ol%C3%A1,%20gostaria%20de%20ser%20atleta!",
  instagram: "https://www.instagram.com/cienciadofutebol/",
  tiktok: "https://www.tiktok.com/@cienciadofutebol_",
} as const;

export const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#unidades", label: "Unidades" },
  { href: ROUTES.aulasOnline, label: "Aulas Online" },
  { href: ROUTES.gestao, label: "Gestão" },
] as const;

export const MOBILE_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#unidades", label: "Unidades" },
  { href: ROUTES.aulasOnline, label: "Aulas Online" },
  { href: ROUTES.gestao, label: "Gestão" },
  { href: ROUTES.cadastro, label: "Cadastre-se" },
] as const;

export const UNIDADES: Unidade[] = [
  { nome: "Zona Norte", imagem: "/Norte.jpeg" },
  { nome: "Zona Leste", imagem: "/Leste.jpeg" },
  { nome: "Barra da Tijuca", imagem: "/CDF.RJ.jpg" },
  { nome: "Santos", imagem: "/Santos.jpeg" },
  { nome: "Zona Oeste", imagem: "/Oeste.jpeg" },
  { nome: "Zona Sul", imagem: "/Sul.jpeg" },
  { nome: "Mogi", imagem: "/CDF.MOGI.jpg" },
  { nome: "ABC", imagem: "/CDF.ABC.jpg" },
];
