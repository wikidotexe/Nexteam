import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import RevealOnScroll from "./animation/reveal-on-scroll";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const faq = [
  {
    question: "Apa saja layanan yang kami tawarkan?",
    answer:
      "Kami menawarkan berbagai layanan teknologi, termasuk pembuatan website, aplikasi desktop (Windows), aplikasi mobile (Android), desain grafis, desain jaringan internet, dan troubleshooting teknis. Semua layanan kami dirancang untuk memberikan solusi praktis dan efisien sesuai kebutuhan Anda.",
  },
  {
    question: "Bagaimana cara memulai menggunakan layanan kami?",
    answer:
      "Untuk memulai, cukup hubungi kami melalui halaman kontak atau chat, beri tahu kami tentang kebutuhan atau ide Anda, dan tim kami akan membantu merencanakan solusi terbaik untuk Anda. Kami akan menjelaskan setiap langkah dan memastikan semuanya berjalan sesuai keinginan Anda.",
  },
  {
    question: "Apakah saya perlu memiliki pengetahuan teknis untuk bekerja dengan kami?",
    answer: "Tidak perlu! Kami akan memandu Anda di setiap langkah. Kami berkomunikasi dengan cara yang mudah dipahami, sehingga Anda bisa ikut serta dalam proses tanpa merasa bingung atau terintimidasi oleh istilah teknis.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
    answer:
      "Waktu pengerjaan proyek bergantung pada jenis layanan yang Anda pilih dan kompleksitasnya. Kami akan memberikan estimasi waktu yang jelas setelah mendiskusikan detail proyek bersama Anda. Kami berusaha untuk menyelesaikan setiap proyek dengan cepat dan tepat waktu.",
  },
  {
    question: "Apakah Anda menawarkan dukungan setelah proyek selesai?",
    answer: "Tentu! Setelah proyek selesai, kami tetap memberikan dukungan dan pemeliharaan. Apakah itu untuk perbaikan bug kecil, pembaruan, atau pertanyaan lainnya, kami siap membantu kapan saja.",
  },
  {
    question: "Bagaimana jika saya tidak puas dengan hasil akhir?",
    answer: "Kami mengutamakan kepuasan pelanggan. Jika Anda tidak puas dengan hasilnya, beri tahu kami! Kami akan melakukan revisi sesuai permintaan Anda untuk memastikan hasil akhir sesuai dengan harapan Anda.",
  },
  {
    question: "Apakah saya bisa mendapatkan harga yang lebih terjangkau jika saya hanya membutuhkan layanan tertentu?",
    answer: "Kami menawarkan solusi yang fleksibel dan dapat disesuaikan dengan anggaran Anda. Jangan ragu untuk berdiskusi dengan kami tentang kebutuhan Anda, dan kami akan mencari cara untuk memberikan harga yang sesuai.",
  },
  {
    question: "Apakah layanan Anda tersedia untuk semua jenis bisnis?",
    answer: "Ya, layanan kami dapat disesuaikan untuk berbagai jenis bisnis, baik kecil maupun besar, serta individu. Apakah Anda seorang pengusaha, profesional, atau organisasi, kami siap membantu.",
  },
  {
    question: "Apa yang membedakan 'Nexteam' dari penyedia layanan lainnya?",
    answer:
      "Kami percaya bahwa teknologi seharusnya mempermudah hidup Anda, bukan menambah masalah. 'Nexteam' mencerminkan komitmen kami untuk memberikan solusi yang bersih, bebas hambatan, dan efisien. Kami berfokus pada hasil yang nyata, dan memastikan Anda mendapatkan layanan yang memenuhi harapan tanpa ada file masalah yang mengganggu.",
  },
  {
    question: "Bagaimana cara saya menghubungi tim kami?",
    answer: "Anda bisa menghubungi kami melalui formulir kontak di website kami, email, atau chat langsung. Tim kami siap merespon dan membantu Anda kapan saja.",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="w-full max-w-(--breakpoint-xl) mx-auto py-8 xs:py-16 px-6">
      <RevealOnScroll>
        <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl leading-[1.15]! font-bold tracking-tighter">Frequently Asked Questions</h2>
        <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">Jawaban singkat untuk pertanyaan yang paling sering ditanyakan seputar layanan kami.</p>
      </RevealOnScroll>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <RevealOnScroll delay={0.05}>
          <Accordion type="single" collapsible className="mt-8 space-y-4 md:columns-2 gap-4">
            {faq.map(({ question, answer }, index) => (
              <RevealOnScroll key={question} delay={0.04 * index}>
                <AccordionItem value={`question-${index}`} className="bg-accent py-1 px-4 rounded-xl border-none mt-0! mb-4! break-inside-avoid">
                  <AccordionPrimitive.Header className="flex">
                    <AccordionPrimitive.Trigger className={cn("flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45", "text-start text-lg")}>
                      {question}
                      <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className="text-[15px]">{answer}</AccordionContent>
                </AccordionItem>
              </RevealOnScroll>
            ))}
          </Accordion>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default FAQ;
