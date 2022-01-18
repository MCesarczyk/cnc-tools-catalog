class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :edit, :update, :destroy]

    skip_before_action :verify_authenticity_token

  def index
    @articles = Article.all.order(article: :asc)
    render json: @articles
  end

  def show
    if @article
      render json: @article
    else
      render json: @article.errors
    end
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article
    else
      render json: @article.errors
    end
  end

  def edit
    if @article
      render json: @article
    else
      render json: @article.errors
    end
  end

  def update
    @article.update(article_params)

    render json: { notice: 'Article was successfully updated.' }
  end

  def destroy
    @article.destroy

    redirect json: { notice: 'Article was successfully removed.' }
  end

  private
    def set_article
      @article = Article.find(params[:id])
    end

    def article_params
      params.permit(:group, :subgroup, :article, :manufacturer, :description, :catalog, :quantity, :annotations)
    end
end
