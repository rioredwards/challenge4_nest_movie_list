import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

export interface MoviesResponse {
  page: number;
  results: Movie[];
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

@Injectable()
export class MoviesApiService {
  private readonly logger = new Logger(MoviesApiService.name);
  constructor(private http: HttpService) {}

  async getPopularMovies(): Promise<MoviesResponse> {
    const { data } = await firstValueFrom(
      this.http
        .get<MoviesResponse>(
          'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
          {
            withCredentials: true,
            params: {
              api_key: 'bf7f81ecad80fd99542ba324ff635cc6',
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    return data;
  }
}

// {
//   "page": 1,
//   "results": [
//       {
//           "adult": false,
//           "backdrop_path": "/2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg",
//           "genre_ids": [
//               28,
//               80,
//               53
//           ],
//           "id": 385687,
//           "original_language": "en",
//           "original_title": "Fast X",
//           "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
//           "popularity": 11557.896,
//           "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
//           "release_date": "2023-05-17",
//           "title": "Fast X",
//           "video": false,
//           "vote_average": 7.4,
//           "vote_count": 1540
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/pNOccytgkGuyofTLmh1sqEfTJuE.jpg",
//           "genre_ids": [
//               10749,
//               18
//           ],
//           "id": 1010581,
//           "original_language": "es",
//           "original_title": "Culpa mía",
//           "overview": "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
//           "popularity": 3107.558,
//           "poster_path": "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
//           "release_date": "2023-06-08",
//           "title": "My Fault",
//           "video": false,
//           "vote_average": 8.4,
//           "vote_count": 462
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/1inZm0xxXrpRfN0LxwE2TXzyLN6.jpg",
//           "genre_ids": [
//               28,
//               53,
//               80
//           ],
//           "id": 603692,
//           "original_language": "en",
//           "original_title": "John Wick: Chapter 4",
//           "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
//           "popularity": 3046.463,
//           "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
//           "release_date": "2023-03-22",
//           "title": "John Wick: Chapter 4",
//           "video": false,
//           "vote_average": 7.9,
//           "vote_count": 2990
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
//           "genre_ids": [
//               28,
//               12,
//               16,
//               878
//           ],
//           "id": 569094,
//           "original_language": "en",
//           "original_title": "Spider-Man: Across the Spider-Verse",
//           "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
//           "popularity": 2410.54,
//           "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
//           "release_date": "2023-05-31",
//           "title": "Spider-Man: Across the Spider-Verse",
//           "video": false,
//           "vote_average": 8.7,
//           "vote_count": 1339
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
//           "genre_ids": [
//               16,
//               10751,
//               12,
//               14,
//               35
//           ],
//           "id": 502356,
//           "original_language": "en",
//           "original_title": "The Super Mario Bros. Movie",
//           "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
//           "popularity": 2386.685,
//           "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
//           "release_date": "2023-04-05",
//           "title": "The Super Mario Bros. Movie",
//           "video": false,
//           "vote_average": 7.8,
//           "vote_count": 4737
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/8FhKnPpql374qyyHAkZDld93IUw.jpg",
//           "genre_ids": [
//               9648,
//               53,
//               878
//           ],
//           "id": 536437,
//           "original_language": "en",
//           "original_title": "Hypnotic",
//           "overview": "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
//           "popularity": 1888.72,
//           "poster_path": "/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
//           "release_date": "2023-05-11",
//           "title": "Hypnotic",
//           "video": false,
//           "vote_average": 6.6,
//           "vote_count": 172
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/9NgtktUFLm9cnFDFaekx2ROh84f.jpg",
//           "genre_ids": [
//               28,
//               12,
//               878
//           ],
//           "id": 667538,
//           "original_language": "en",
//           "original_title": "Transformers: Rise of the Beasts",
//           "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
//           "popularity": 1652.652,
//           "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
//           "release_date": "2023-06-06",
//           "title": "Transformers: Rise of the Beasts",
//           "video": false,
//           "vote_average": 7.4,
//           "vote_count": 283
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/dTsOvK19Brm1u2p06K7qlTyKHIi.jpg",
//           "genre_ids": [
//               28,
//               10752,
//               53
//           ],
//           "id": 1074034,
//           "original_language": "en",
//           "original_title": "Ambush",
//           "overview": "When a small outpost is ambushed, a US Army squad must take the battle below ground on a high-stakes mission in a new type of warfare the likes of which they have never seen.",
//           "popularity": 1307.412,
//           "poster_path": "/3QjtDMS7PB4SMj0nAJQiE86Lo0w.jpg",
//           "release_date": "2023-02-24",
//           "title": "Ambush",
//           "video": false,
//           "vote_average": 6.2,
//           "vote_count": 13
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/kIX6VS5FTMURcK3WlNNkPss60e4.jpg",
//           "genre_ids": [
//               878,
//               28,
//               12
//           ],
//           "id": 298618,
//           "original_language": "en",
//           "original_title": "The Flash",
//           "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
//           "popularity": 1172.081,
//           "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
//           "release_date": "2023-06-13",
//           "title": "The Flash",
//           "video": false,
//           "vote_average": 6.8,
//           "vote_count": 144
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg",
//           "genre_ids": [
//               27,
//               53
//           ],
//           "id": 890771,
//           "original_language": "en",
//           "original_title": "The Black Demon",
//           "overview": "Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
//           "popularity": 1142.229,
//           "poster_path": "/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
//           "release_date": "2023-04-26",
//           "title": "The Black Demon",
//           "video": false,
//           "vote_average": 6.5,
//           "vote_count": 167
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
//           "genre_ids": [
//               878,
//               12,
//               28
//           ],
//           "id": 76600,
//           "original_language": "en",
//           "original_title": "Avatar: The Way of Water",
//           "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
//           "popularity": 1099.345,
//           "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//           "release_date": "2022-12-14",
//           "title": "Avatar: The Way of Water",
//           "video": false,
//           "vote_average": 7.7,
//           "vote_count": 8560
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/ribiMu3iINPxDkofErPxe8jQ8L0.jpg",
//           "genre_ids": [
//               12,
//               10751,
//               14,
//               10749
//           ],
//           "id": 447277,
//           "original_language": "en",
//           "original_title": "The Little Mermaid",
//           "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
//           "popularity": 1034.02,
//           "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
//           "release_date": "2023-05-18",
//           "title": "The Little Mermaid",
//           "video": false,
//           "vote_average": 6.2,
//           "vote_count": 660
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
//           "genre_ids": [
//               878,
//               12,
//               28
//           ],
//           "id": 447365,
//           "original_language": "en",
//           "original_title": "Guardians of the Galaxy Vol. 3",
//           "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
//           "popularity": 943.466,
//           "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
//           "release_date": "2023-05-03",
//           "title": "Guardians of the Galaxy Vol. 3",
//           "video": false,
//           "vote_average": 8.1,
//           "vote_count": 1961
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
//           "genre_ids": [
//               53,
//               27
//           ],
//           "id": 713704,
//           "original_language": "en",
//           "original_title": "Evil Dead Rise",
//           "overview": "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
//           "popularity": 922.336,
//           "poster_path": "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
//           "release_date": "2023-04-12",
//           "title": "Evil Dead Rise",
//           "video": false,
//           "vote_average": 7.1,
//           "vote_count": 1616
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/6fYTLy4QE55BgMiHF3Co7bErjry.jpg",
//           "genre_ids": [
//               10752,
//               53,
//               28,
//               12,
//               9648,
//               878,
//               18
//           ],
//           "id": 1018494,
//           "original_language": "en",
//           "original_title": "Operation Seawolf",
//           "overview": "During the last days of World War II, Germany, desperate for any last grasp to defeat the allied powers, looked to their last remaining weapons and soldiers. The German Navy and the last remaining U-Boats were formed together for one desperate last mission – a mission to attack the United States Homeland, known as Operation Seawolf. Captain Hans Kessler, a grizzled submarine commander from both World Wars, is called into service to make one mission a success and help turn the tide of the war.",
//           "popularity": 878.545,
//           "poster_path": "/eqm5EAyC9hJCN5qutuW4Ka1xYbU.jpg",
//           "release_date": "2022-10-07",
//           "title": "Operation Seawolf",
//           "video": false,
//           "vote_average": 6.1,
//           "vote_count": 46
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
//           "genre_ids": [
//               28,
//               10752
//           ],
//           "id": 840326,
//           "original_language": "fi",
//           "original_title": "Sisu",
//           "overview": "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
//           "popularity": 871.471,
//           "poster_path": "/ygO9lowFMXWymATCrhoQXd6gCEh.jpg",
//           "release_date": "2023-01-27",
//           "title": "Sisu",
//           "video": false,
//           "vote_average": 7.4,
//           "vote_count": 679
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
//           "genre_ids": [
//               28,
//               12,
//               878
//           ],
//           "id": 640146,
//           "original_language": "en",
//           "original_title": "Ant-Man and the Wasp: Quantumania",
//           "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
//           "popularity": 850.735,
//           "poster_path": "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
//           "release_date": "2023-02-15",
//           "title": "Ant-Man and the Wasp: Quantumania",
//           "video": false,
//           "vote_average": 6.5,
//           "vote_count": 3266
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/r2tDSD6kcHflPzsGepl8aTPTWxy.jpg",
//           "genre_ids": [
//               28,
//               35,
//               80
//           ],
//           "id": 879444,
//           "original_language": "en",
//           "original_title": "Accident Man: Hitman's Holiday",
//           "overview": "The Accident Man is back, and this time he must best the top assassins in the world to protect the ungrateful son of a mafia boss, save the life of his only friend and rekindle his relationship with his maniacal father figure.",
//           "popularity": 819.322,
//           "poster_path": "/npW9nfL7F3ZVpaCpabqo98KTLw6.jpg",
//           "release_date": "2022-10-14",
//           "title": "Accident Man: Hitman's Holiday",
//           "video": false,
//           "vote_average": 6.7,
//           "vote_count": 80
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/baE88dSR0byNAMDBk8HENkdDbt0.jpg",
//           "genre_ids": [
//               27,
//               53
//           ],
//           "id": 1098160,
//           "original_language": "en",
//           "original_title": "The Tank",
//           "overview": "In 1978 Oregon, Ben and Jules inherit an abandoned coastal property from Ben's late mother, who's never mentioned it. The untouched house has been kept a secret for 40 years and comes with a beautiful private cove and beach. Jules searches for answers while Ben unwittingly awakens a fiercely protective creature.",
//           "popularity": 747.657,
//           "poster_path": "/2VxEtwgzOUukatl2IKGn4borpgE.jpg",
//           "release_date": "2023-04-21",
//           "title": "The Tank",
//           "video": false,
//           "vote_average": 5,
//           "vote_count": 28
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/qGQf2OHIkoh89K8XeKQzhxczf96.jpg",
//           "genre_ids": [
//               28,
//               12,
//               16,
//               878
//           ],
//           "id": 324857,
//           "original_language": "en",
//           "original_title": "Spider-Man: Into the Spider-Verse",
//           "overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
//           "popularity": 738.323,
//           "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
//           "release_date": "2018-12-06",
//           "title": "Spider-Man: Into the Spider-Verse",
//           "video": false,
//           "vote_average": 8.4,
//           "vote_count": 13129
//       }
//   ],
//   "total_pages": 38751,
//   "total_results": 775008
// }
