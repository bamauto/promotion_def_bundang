import React from 'react';
import { Helmet } from 'react-helmet-async';
import SchemaJsonLd, { generateLocalBusinessSchema } from '../components/SchemaJsonLd';
import { ArrowRight, Star, MapPin, Phone, Shield, Clock, Users, Zap, CheckCircle, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectionTitle = ({ title, subtitle }) => (
    <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
        <h3 className="text-amber-400 font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-3 animate-fade-in-up">{subtitle}</h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 relative z-10 animate-fade-in-up delay-100 drop-shadow-sm">{title}</h2>
        <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-transparent mx-auto mt-6"></div>
    </div>
);

const FeatureItem = ({ icon: Icon, title, desc, delay }) => (
    <div className={`flex flex - col items - center text - center p - 8 bg - gradient - to - b from - slate - 800 / 30 to - slate - 900 / 30 rounded - 2xl border border - slate - 800 hover: border - amber - 500 / 30 transition - all duration - 500 hover: bg - slate - 800 / 50 group hover: -translate - y - 2 animate - fade -in -up h - full`} style={{ animationDelay: `${delay} ms` }}>
        <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-slate-800 group-hover:border-amber-500/50 transition-colors relative flex-shrink-0">
            <div className="absolute inset-0 bg-amber-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <Icon size={36} className="text-slate-400 group-hover:text-amber-400 transition-colors relative z-10" />
        </div>
        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
);

const Home = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // Header height approx
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    return (
        <>
            <Helmet>
                <title>분당 하이퍼블릭 & 가라오케 | 서우실장 추천 가이드</title>
                <meta name="description" content="분당 하이퍼블릭, 가라오케, 셔츠룸, 호스트바, 기모노룸 예약 가이드. 서우실장이 추천하는 투명한 가격과 1:1 맞춤형 프리미엄 서비스. 정자역, 판교, 서현역 인근 24시간 예약 문의." />
                <meta name="keywords" content="분당 하이퍼블릭, 분당 가라오케, 분당 셔츠룸, 분당 기모노룸, 분당 호스트바, 분당 유흥, 분당 노래방, 서우실장, 분당 접대, 정자동 하이퍼블릭" />
                <meta property="og:title" content="분당 하이퍼블릭 & 가라오케 | 서우실장 추천 가이드" />
                <meta property="og:description" content="분당 전지역 픽업. 하이퍼블릭, 가라오케, 셔츠룸, 기모노룸, 호스트바 예약. 투명한 주대와 최고의 수질을 약속합니다." />
                <link rel="canonical" href="https://bundang-entertainment.com" />
            </Helmet>
            <SchemaJsonLd data={generateLocalBusinessSchema()} />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
                {/* Background with overlay */}
                <div className="absolute inset-0 z-0">
                    <iframe src='https://my.spline.design/orbscrolltriggerforhero-g0oExdQ960LnbFdlETb2yoKI/' frameBorder='0' width='100%' height='100%'></iframe>
                </div>
                <div className="absolute inset-0 bg-slate-950/70 z-0 pointer-events-none"></div>

                <div className="relative z-10 container mx-auto px-4 text-center mt-10">
                    <div className="animate-fade-in-up">
                        <span className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-900/10 backdrop-blur-md text-amber-400 px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] mb-8 uppercase hover:bg-amber-900/20 transition-colors cursor-default">
                            <Crown size={12} fill="currentColor" /> 프리미엄 하이퍼블릭 서비스
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight drop-shadow-2xl">
                            분당 하이퍼블릭 & 가라오케<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">서우실장 추천 가이드</span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            하이퍼블릭, 가라오케, 호빠.<br className="md:hidden" /> 당신의 품격에 걸맞은<br />
                            <strong className="text-white font-medium">최상위 라인업과 프라이빗 서비스</strong>를 약속합니다.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <button
                                onClick={() => window.location.href = 'tel:01026264833'}
                                className="group relative px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_40px_rgba(245,158,11,0.4)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                <span className="relative flex items-center justify-center gap-2">
                                    <Phone size={20} className="group-hover:animate-bounce" /> VIP 예약하기
                                </span>
                            </button>
                            <Link
                                to="/bundang-hyperpub-guide"
                                className="px-10 py-5 bg-slate-900/50 backdrop-blur text-white font-bold rounded-xl border border-slate-700 hover:border-amber-500 hover:text-amber-400 transition-all hover:bg-slate-900 flex items-center justify-center gap-2"
                            >
                                <GlassWater size={20} /> 라운지 투어
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 cursor-pointer" onClick={() => scrollToSection('features')}>
                    <ChevronDown size={32} />
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-24 bg-slate-950 container mx-auto px-4 relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
                <SectionTitle title="왜 서우실장인가?" subtitle="특별한 서비스" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureItem icon={ShieldCheck} title="100% 정찰제" desc="추가금 없는 투명한 가격 정책으로 신뢰를 드립니다." delay={0} />
                    <FeatureItem icon={Users} title="최고 수준 매니저" desc="철저한 교육과 마인드를 갖춘 70여명의 매니저 대기." delay={100} />
                    <FeatureItem icon={Crown} title="1:1 맞춤 초이스" desc="고객님의 이상형과 취향을 고려한 완벽한 매칭." delay={200} />
                    <FeatureItem icon={Car} title="고급 세단 픽업" desc="편안한 이동을 위해 고급 세단 픽업 서비스를 제공합니다." delay={300} />
                </div>
            </section>

            {/* Introduction Text - Parallax like */}
            <section className="py-24 md:py-32 relative md:bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
                <div className="absolute inset-0 bg-slate-950/90"></div>
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="md:w-1/2 order-2 md:order-1">
                        <span className="text-amber-500 font-bold tracking-widest uppercase mb-2 block">1인 고객 맞춤 케어</span>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            혼자여서<br />망설이시나요?
                        </h3>
                        <div className="space-y-6 text-slate-300 text-lg font-light leading-relaxed">
                            <p>
                                오직 한 분만을 위한 <strong className="text-white">특별한 VIP 케어</strong>가 준비되어 있습니다.<br />
                                서우 실장은 혼자 오시는 고객님이 어색함 없이 최고의 시간을<br />
                                보내실 수 있도록 더욱 세심하고 은밀하게 밀착 케어해 드립니다.
                            </p>
                            <p>
                                단 둘만의 프라이빗하고 오붓한 시간부터 화끈한 파티 분위기까지,<br />
                                원하시는 스타일만 말씀해 주세요. 격이 다른 서비스와 세팅을 통해<br />
                                귀하의 소중한 밤을 <strong className="text-amber-500">완벽하게 디자인</strong>해 드리겠습니다.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-4">
                            {[
                                "1인 방문 절대 환영", "24시간 항시 대기", "프라이빗 룸 완비", "맞춤형 파트너 추천"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-300 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                                    <CheckCircle size={18} className="text-amber-500 flex-shrink-0" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <div className="relative">
                            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-amber-500 to-purple-600 rounded-2xl opacity-30 blur-2xl animate-pulse"></div>
                            <div className="aspect-[4/5] md:h-[500px] bg-slate-800 rounded-2xl overflow-hidden relative border border-slate-700 shadow-2xl md:transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
                                <div className="absolute inset-0 bg-[url('/private_room_bg_v2.jpg')] bg-cover bg-[center_20%] opacity-90"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 p-8">
                                    <h3 className="text-3xl font-bold text-white">프라이빗 룸</h3>
                                    <p className="text-amber-500 font-bold tracking-widest uppercase text-sm">럭셔리 & 시크릿</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Interactive Gallery Section */}
            <section className="py-24 bg-slate-950 overflow-hidden">
                <div className="container mx-auto px-4 mb-16 text-center">
                    <span className="text-amber-500 font-bold tracking-[0.3em] uppercase mb-4 block animate-pulse">서우실장 프리미엄 컬렉션</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight break-keep">
                        전국 1% <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">수질 아가씨</span> 항시 대기
                    </h2>
                    <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed break-keep">
                        전국 유흥 업계 최대 규모의 인프라를 바탕으로<br />
                        가장 많은 아가씨를 보유하고 있습니다.<br className="hidden md:block" /><br />
                        고객님 한 분 한 분의 스타일과 취향을 분석하여<br />
                        <strong className="text-white">100% 만족하실 수 있도록</strong><br className="md:hidden" /> 완벽하게 매칭해 드립니다.
                    </p>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mt-10"></div>
                </div>

                <div className="relative flex overflow-hidden">
                    <div className="flex animate-infinite-scroll whitespace-nowrap group hover:[animation-play-state:paused]">
                        {/* Double the images for seamless loop */}
                        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, idx) => (
                            <div key={idx} className="inline-block px-4">
                                <div className="w-[300px] h-[450px] md:w-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative group/card">
                                    <img
                                        src={`/ gallery_${num}.png`}
                                        alt={`서우실장 아가씨 ${num} `}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity"></div>
                                    <div className="absolute bottom-6 left-8">
                                        <span className="text-amber-500 font-bold tracking-widest text-sm uppercase">PREMIUM CHOICE</span>
                                        <div className="w-8 h-0.5 bg-amber-500 mt-2 group-hover/card:w-16 transition-all duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Venue Preview */}
            <section className="py-24 container mx-auto px-4">
                <SectionTitle title="제휴 업소 안내" subtitle="분당 유흥 핫플레이스" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { id: 'bundang-hyperpub-guide', title: '하이퍼블릭', sub: '핫플레이스 / 메칸더', img: 'https://images.unsplash.com/photo-1574096079513-d82599602950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
                        { id: 'bundang-karaoke-guide', title: '가라오케', sub: '마징가 / 마블', img: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
                        { id: 'bundang-hostbar-guide', title: '호빠', sub: '비스트 (인계동)', img: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
                    ].map((item, idx) => (
                        <Link to={`/ ${item.id} `} key={idx} className="group relative overflow-hidden rounded-[2rem] h-[500px] cursor-pointer shadow-2xl block">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url('${item.img}')` }}></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-950/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>

                            <div className="absolute bottom-0 left-0 p-10 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="w-12 h-1 bg-amber-500 mb-6 w-0 group-hover:w-12 transition-all duration-500"></div>
                                <h4 className="text-4xl font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-slate-300 text-lg mb-6 font-light">{item.sub}</p>
                                <span className="inline-flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    상세 보기 <ChevronDown className="rotate-[-90deg]" size={16} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Home;
